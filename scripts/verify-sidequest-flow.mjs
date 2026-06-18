const targetUrl = process.argv[2] ?? "http://127.0.0.1:5173/sidequest";

const response = await fetch(targetUrl);

if (!response.ok) {
  throw new Error(`Expected ${targetUrl} to return 2xx, got ${response.status}`);
}

const html = await response.text();

const requiredSnippets = [
  "Side Quest",
  "A tiny task appeared.",
  "Clear seven quick steps",
  "Start",
];

const forbiddenSnippets = ["\ubc18\uc9c0 \uc0ac\uc774\uc988 \uce21\uc815", "\ub9c1"];
const forbiddenPatterns = [/\bring\b/i];

const missing = requiredSnippets.filter((snippet) => !html.includes(snippet));
const forbidden = forbiddenSnippets.filter((snippet) => html.includes(snippet));
const forbiddenPattern = forbiddenPatterns.find((pattern) => pattern.test(html));

if (missing.length > 0) {
  throw new Error(`Sidequest page is missing expected content: ${missing.join(", ")}`);
}

if (forbidden.length > 0) {
  throw new Error(`Sidequest page contains forbidden content: ${forbidden.join(", ")}`);
}

if (forbiddenPattern) {
  throw new Error(`Sidequest page matches forbidden pattern: ${forbiddenPattern}`);
}

console.log(`Sidequest flow content verified at ${targetUrl}`);
