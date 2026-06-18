import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getServerConfig } from "../config.server";

const sidequestSubmissionSchema = z.object({
  fingerCircumference: z
    .string()
    .trim()
    .min(1)
    .max(24)
    .regex(/^\d{1,3}(\.\d{1,2})?$/),
});

type SidequestSubmitResult =
  | { ok: true; id: string | null; sentAt: string }
  | { ok: false; reason: "missing_config" | "send_failed" };

function htmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const submitSidequestMeasurement = createServerFn({ method: "POST" })
  .validator(sidequestSubmissionSchema)
  .handler(async ({ data }): Promise<SidequestSubmitResult> => {
    const config = getServerConfig();
    const recipients = (config.sidequestToEmail ?? "")
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    if (!config.resendApiKey || recipients.length === 0 || !config.sidequestFromEmail) {
      return { ok: false, reason: "missing_config" };
    }

    const submittedAt = new Date().toISOString();
    const measurement = `${data.fingerCircumference} mm`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "isaac-sidequest/1.0",
      },
      body: JSON.stringify({
        from: config.sidequestFromEmail,
        to: recipients,
        subject: "Sidequest finger circumference submitted",
        html: [
          "<h1>Sidequest submission</h1>",
          `<p><strong>Finger circumference:</strong> ${htmlEscape(measurement)}</p>`,
          `<p><strong>Submitted at:</strong> ${htmlEscape(submittedAt)}</p>`,
        ].join(""),
        text: `Sidequest submission\nFinger circumference: ${measurement}\nSubmitted at: ${submittedAt}`,
      }),
    });

    const result = (await response.json().catch(() => null)) as {
      id?: string;
      message?: string;
    } | null;

    if (!response.ok) {
      console.error("Sidequest email failed", {
        status: response.status,
        message: result?.message,
      });
      return { ok: false, reason: "send_failed" };
    }

    return { ok: true, id: result?.id ?? null, sentAt: submittedAt };
  });
