import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Output contract: /output/entry.txt must contain exactly ENTRY_TEXT
// (266 characters, UTF-8, no trailing newline) — the entry text is fixed,
// so the program writes it verbatim and is fully deterministic.
const ENTRY_TEXT =
  "The lighthouse keeper counts the gulls each evening, and every night one is missing. He has never seen it leave. Tonight the fog is thin, the sea is flat, and on the rocks below, in the exact place the gull used to stand, there is a single white feather, still warm.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY_TEXT, "utf8");
