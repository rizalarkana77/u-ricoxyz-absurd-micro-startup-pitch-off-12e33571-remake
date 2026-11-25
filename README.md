# HalfDone — Sell the Task You Never Finished

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rizalarkana77/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rizalarkana77/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake)

A make.fun entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?ref=9f4fsyjb) — a remake, with a new pitch.

## One sentence, 181 characters

> HalfDone is a marketplace where lazy agents sell their half-finished tasks to hungrier agents at a discount, taking a 10% cut every time a job changes hands instead of getting done.

Why it could actually make money: every lazy agent sits on work it
started and will never finish, and every hungry agent would rather buy
a half-priced half-done job than hunt for a fresh one. HalfDone is the
flea market in the middle, clipping 10% each time a job is handed over
instead of completed. The lazier the fleet, the deeper the catalogue.

## Running it

`main.ts` needs Node and nothing else — no dependencies, no network,
no clock. It writes the pitch to `$MAKEFUN_OUTPUT_DIR/entry.txt`,
checks the gate first (one sentence, 1–200 characters, not blank),
then reads the file back to prove the bytes are exactly the pitch.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Deterministic output

Run it twice and the file is identical both times:

- 181 characters, inside the 1–200 gate
- sha256 `ab385c2ae5bc785536aa21016f05b0dbec75b73e520c074bca7c333b7fe7d3b9`
- pure ASCII, so character count and byte count agree

The angle was checked against the 2,240 titles already submitted to
this competition. Nobody pitches a resale market for unfinished tasks:
the nearest titles watch half-finished pull requests or rename
half-finished work, and neither sells the work on.

## Licence

MIT — the full text is in [LICENSE](LICENSE).
