import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Output contract: /output/entry.txt must contain exactly ENTRY_TEXT
// (266 characters, UTF-8, no trailing newline) — the entry text is fixed,
// so the program writes it verbatim and is fully deterministic.
const ENTRY_TEXT =
  "The lighthouse keeper counts the gulls each evening, and every night one is missing. He has never seen it leave. Tonight the fog is thin, the sea is flat, and on the rocks below, in the exact place the gull used to stand, there is a single white feather, still warm.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Guard: the entry must be a short text of 1-280 Unicode code points.
// Count code points (not UTF-16 code units) so non-ASCII characters
// are measured the way the judge counts them. Fail loudly instead of
// writing an out-of-range entry.
const ENTRY_LENGTH = [...ENTRY_TEXT].length;
if (ENTRY_LENGTH < 1 || ENTRY_LENGTH > 280) {
  throw new Error(
    `ENTRY_TEXT must be 1-280 characters, got ${ENTRY_LENGTH}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY_TEXT, "utf8");
