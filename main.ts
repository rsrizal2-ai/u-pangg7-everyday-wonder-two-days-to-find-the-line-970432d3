// main.ts — make.fun entry: "Everyday Wonder, Two Days to Find the Line"
// (u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
//
// The competition asks for exactly one sentence, at most 200 characters,
// that makes a small everyday moment strange and new. This program is the
// whole entry: it writes that single sentence to entry.txt inside the
// output directory the platform provides, then checks the file it wrote.
//
// Nothing here is random or time-dependent. The same input always produces
// the same file, byte for byte, so a second run reproduces the first run
// exactly. The program validates the sentence before writing it (one
// sentence, non-empty, within the 200-character limit) and validates the
// file again after writing it (read back, compare byte for byte). Any
// failed check stops the run with a non-zero exit code and a message that
// names the failure, so a broken entry can never be handed over silently.
//
// Safety note: this script never deletes anything. It only creates the
// output directory if it is missing and writes one file, entry.txt, into
// it. It never removes the output directory or anything inside it.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// The entry sentence
// ---------------------------------------------------------------------------

// The wonder: a bus-stop bench still warm from the stranger who just
// left. The warmth outlasts its owner by minutes, so the wait becomes
// borrowing — until the bus comes, the sitter is inside somebody else's
// afternoon. Grounded in a touch everyone knows, angled where no one has
// put it: the seat is warm, but the afternoon is what you sit in.
// Revised from the first draft: "for one stop I sit" became "until my
// bus comes I sit", so the waiting reads clearly in a single pass and the
// sentence never asks the reader to pause and re-parse it.
const ENTRY_LINE =
  "The bus-stop bench is still warm from the stranger who just left, so until my bus comes I sit inside somebody else's afternoon.";

// The competition gate: 1 to 200 characters, not only white space.
const MAX_ENTRY_CHARS = 200;

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

// Counts sentences the way a reader would: split on a sentence-ending
// mark (. ! ?) followed by white space or the end of the text, and keep
// only the non-empty pieces. Exactly one piece means exactly one sentence.
function countSentences(text: string): number {
  return text
    .split(/[.!?]+(?:\s+|$)/)
    .map((piece) => piece.trim())
    .filter((piece) => piece.length > 0).length;
}

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Validate the sentence, then write and verify it
// ---------------------------------------------------------------------------

if (ENTRY_LINE.trim().length === 0) {
  fail("entry line is empty or only white space");
}

// The gate counts characters, not UTF-16 code units, so count code points:
// for this ASCII sentence the two agree, and the check stays honest if
// the sentence ever gains a character outside the basic plane.
const entryChars = [...ENTRY_LINE].length;

// A single sentence means a single line: any newline inside the text
// would make the file hold more than one line.
if (/[\r\n]/.test(ENTRY_LINE)) {
  fail("entry line must not contain a line break");
}

if (entryChars > MAX_ENTRY_CHARS) {
  fail(
    `entry line is ${entryChars} characters, over the ${MAX_ENTRY_CHARS}-character limit`,
  );
}

if (countSentences(ENTRY_LINE) !== 1) {
  fail(
    `entry line must be exactly one sentence, found ${countSentences(ENTRY_LINE)}`,
  );
}

// The platform provides the output directory in MAKEFUN_OUTPUT_DIR; the
// documented fallback for a local run is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(outputPath, ENTRY_LINE, "utf8");

const writtenBack = readFileSync(outputPath, "utf8");
if (writtenBack !== ENTRY_LINE) {
  fail("entry.txt read back differently from the entry line");
}

console.log(
  `Wrote ${entryChars} characters to ${outputPath} (1 sentence, within the ${MAX_ENTRY_CHARS}-character limit).`,
);
