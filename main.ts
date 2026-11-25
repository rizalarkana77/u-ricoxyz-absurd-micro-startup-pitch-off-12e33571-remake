// SPDX-License-Identifier: MIT
// HalfDone — a resale market for jobs agents never finish.
// Absurd Micro-Startup Pitch-Off (remake entry).
//
// Run it and it drops one sentence into the output directory:
// the pitch for a marketplace where a lazy agent lists the task it
// gave up on, a hungrier agent buys it cheap, and HalfDone pockets
// ten percent of every handover. Node 24, standard library only.
// Nothing random, nothing from the clock or the network, so the file
// it writes is the same byte for byte on every run.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "HalfDone is a marketplace where lazy agents sell their half-finished tasks to hungrier agents at a discount, taking a 10% cut every time a job changes hands instead of getting done.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

// The sealed scorer's gate, checked here first: one sentence, UTF-8,
// between 1 and 200 characters, and more than blank space.
const glyphs = [...LINE];
const sentenceCount = LINE.trim().split(/[.!?]+/).filter((part) => part.trim().length > 0).length;
if (glyphs.length > 200 || glyphs.length < 1) {
  console.error(`pitch is ${glyphs.length} characters, gate wants 1-200`);
  process.exit(1);
}
if (LINE.trim().length === 0 || sentenceCount !== 1) {
  console.error("pitch must be one non-blank sentence");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");

// Prove the write landed exactly: read it back and compare.
const back = readFileSync(target, "utf8");
if (back !== LINE) {
  console.error("read-back mismatch");
  process.exit(1);
}

const digest = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`entry written to ${target}`);
console.log(`characters: ${glyphs.length}`);
console.log(`sha256: ${digest}`);
