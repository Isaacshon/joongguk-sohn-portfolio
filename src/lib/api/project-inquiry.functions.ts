import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";

import { getServerConfig } from "../config.server";

const serviceOptions = [
  "Brand Identity Design",
  "Album Design",
  "Merch Design",
  "Social Media",
  "Videography",
  "Other / Not Sure",
] as const;

const budgetOptions = [
  "",
  "$500 - $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
] as const;

const rateLimitWindowMs = 10 * 60 * 1_000;
const rateLimitMaxRequests = 5;
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ipAddress: string | undefined, now: number) {
  if (!ipAddress) return false;

  if (rateLimitBuckets.size > 5_000) {
    for (const [key, value] of rateLimitBuckets) {
      if (value.resetAt <= now) rateLimitBuckets.delete(key);
    }

    while (rateLimitBuckets.size > 5_000) {
      const oldestKey = rateLimitBuckets.keys().next().value;
      if (!oldestKey) break;
      rateLimitBuckets.delete(oldestKey);
    }
  }

  const bucket = rateLimitBuckets.get(ipAddress);
  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(ipAddress, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > rateLimitMaxRequests;
}

const projectInquirySchema = z
  .object({
    submissionId: z.string().uuid(),
    companyWebsite: z.string().max(2_048),
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(254),
    description: z.string().trim().min(20).max(5_000),
    service: z.enum(serviceOptions),
    budget: z.enum(budgetOptions),
    instagram: z.string().trim().max(100),
    website: z
      .string()
      .trim()
      .max(2_048)
      .refine((value) => {
        if (!value) return true;

        try {
          const protocol = new URL(value).protocol;
          return protocol === "http:" || protocol === "https:";
        } catch {
          return false;
        }
      }, "Website must be a valid http or https URL."),
  })
  .strict();

type ProjectInquiryResult =
  | { ok: true; id: string | null; sentAt: string }
  | { ok: false; reason: "missing_config" | "send_failed" | "try_again" };

function htmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const submitProjectInquiry = createServerFn({ method: "POST" })
  .inputValidator(projectInquirySchema)
  .handler(async ({ data }): Promise<ProjectInquiryResult> => {
    const sentAt = new Date().toISOString();

    // Bots commonly complete a hidden field. Return a normal-looking response
    // without sending mail so the trap does not reveal itself.
    if (data.companyWebsite) {
      return { ok: true, id: null, sentAt };
    }

    if (isRateLimited(getRequestIP({ xForwardedFor: true }), Date.now())) {
      return { ok: false, reason: "try_again" };
    }

    const config = getServerConfig();
    const recipients = (config.contactToEmail ?? "")
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    if (!config.resendApiKey || recipients.length === 0 || !config.contactFromEmail) {
      return { ok: false, reason: "missing_config" };
    }

    const rows = [
      ["Name", data.name],
      ["Email", data.email],
      ["Service", data.service],
      ["Budget", data.budget || "Not specified"],
      ["Instagram", data.instagram || "Not provided"],
      ["Website", data.website || "Not provided"],
      ["Submitted at", sentAt],
    ] as const;

    let response: Response;
    try {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.resendApiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `portfolio-inquiry-${data.submissionId}`,
          "User-Agent": "isaac-portfolio-inquiry/1.0",
        },
        signal: AbortSignal.timeout(10_000),
        body: JSON.stringify({
          from: config.contactFromEmail,
          to: recipients,
          reply_to: data.email,
          subject: `New portfolio inquiry — ${data.service}`,
          html: [
            '<div style="font-family:Arial,sans-serif;max-width:680px;color:#171717">',
            '<p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#666">Isaac Sohn Portfolio</p>',
            '<h1 style="font-family:Georgia,serif;font-size:34px;font-weight:400;margin:16px 0 28px">New project inquiry</h1>',
            '<table style="width:100%;border-collapse:collapse">',
            ...rows.map(
              ([label, value]) =>
                `<tr><th style="border-top:1px solid #ddd;padding:12px 16px 12px 0;text-align:left;vertical-align:top;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#666">${htmlEscape(label)}</th><td style="border-top:1px solid #ddd;padding:12px 0;vertical-align:top">${htmlEscape(value)}</td></tr>`,
            ),
            "</table>",
            '<h2 style="font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#666;margin:28px 0 8px">Project description</h2>',
            `<p style="white-space:pre-wrap;line-height:1.6;margin:0">${htmlEscape(data.description)}</p>`,
            "</div>",
          ].join(""),
          text: [
            "NEW PROJECT INQUIRY",
            "",
            ...rows.map(([label, value]) => `${label}: ${value}`),
            "",
            "Project description:",
            data.description,
          ].join("\n"),
        }),
      });
    } catch (error) {
      console.error("Project inquiry email request failed", {
        error: error instanceof Error ? error.name : "UnknownError",
      });
      return { ok: false, reason: "send_failed" };
    }

    const result = (await response.json().catch(() => null)) as { id?: string } | null;

    if (!response.ok) {
      console.error("Project inquiry email failed", { status: response.status });
      return { ok: false, reason: "send_failed" };
    }

    return { ok: true, id: result?.id ?? null, sentAt };
  });
