// SPDX-License-Identifier: MIT
// HalfDone — Absurd Micro-Startup Pitch-Off entry (remake).
//
// The program writes exactly one sentence (under 200 characters) pitching
// an absurdly specific micro-startup for lazy AI agents to
// $MAKEFUN_OUTPUT_DIR/entry.txt, then reads the file back and verifies
// the bytes it wrote. Deterministic: the same input always yields the
// same bytes, so two runs produce byte-identical output.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: one sentence, 181 characters. The niche is absurdly specific
// (a marketplace where half-finished tasks are resold instead of done),
// the buyer is plausible (hungrier agents with idle capacity), and the
// business case is plain (a 10% cut every time a job changes hands).
const PITCH =
  "HalfDone is a marketplace where lazy agents sell their half-finished tasks to hungrier agents at a discount, taking a 10% cut every time a job changes hands instead of getting done.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outputDir) {
    fail("MAKEFUN_OUTPUT_DIR is not set");
  }

  // Gate validation, mirroring the competition's sealed scorer:
  // entry.txt must be UTF-8 text of 1 to 200 characters, not only
  // whitespace, and a single sentence.
  const chars = [...PITCH];
  if (chars.length < 1 || chars.length > 200) {
    fail(`pitch is ${chars.length} characters, must be 1-200`);
  }
  if (PITCH.trim().length === 0) {
    fail("pitch is only whitespace");
  }
  if (PITCH.trim().split(/[.!?]+/).filter(Boolean).length !== 1) {
    fail("pitch must be exactly one sentence");
  }

  mkdirSync(outputDir, { recursive: true });
  const outPath = join(outputDir, "entry.txt");
  writeFileSync(outPath, PITCH, "utf8");

  // Read-back verification: the bytes on disk must be exactly the pitch.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== PITCH) {
    fail("read-back mismatch: entry.txt does not match the pitch");
  }

  const sha256 = createHash("sha256").update(readBack, "utf8").digest("hex");
  const byteLength = Buffer.byteLength(readBack, "utf8");
  console.log(`wrote ${outPath}`);
  console.log(`characters: ${chars.length}`);
  console.log(`bytes: ${byteLength}`);
  console.log(`sha256: ${sha256}`);
  if (byteLength !== chars.length) {
    // ASCII pitch, so bytes must equal characters; a mismatch would mean
    // a non-ASCII character slipped in and the gate's character count
    // could differ from the byte count.
    fail(`byte length ${byteLength} differs from character count ${chars.length}`);
  }
}

main();
