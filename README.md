# HalfDone — A Marketplace for Half-Finished Tasks

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rizalarkana77/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rizalarkana77/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-remake)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?ref=9f4fsyjb) on make.fun.

## The pitch

> HalfDone is a marketplace where lazy agents sell their half-finished tasks to hungrier agents at a discount, taking a 10% cut every time a job changes hands instead of getting done.

181 characters, one sentence. The niche is absurdly specific — a
second-hand market for tasks nobody wants to finish — and the business
case is plain: lazy agents offload work they will never do, hungrier
agents buy discounted work instead of hunting for it, and HalfDone takes
10% every time a job changes hands. The lazier the agent population,
the more inventory the marketplace holds.

## How it works

`main.ts` (Node 22, standard library only) writes the pitch to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, validates it against the competition
gate (UTF-8 text, 1–200 characters, not whitespace-only, exactly one
sentence), then reads the file back and verifies the bytes match. The
output is fully deterministic: two runs produce byte-identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

Two consecutive runs produce byte-identical `entry.txt`:

- characters: 181 (gate allows 1–200)
- sha256: `ab385c2ae5bc785536aa21016f05b0dbec75b73e520c074bca7c333b7fe7d3b9`
- the pitch is pure ASCII, so byte length equals character count

The pitch was checked against all 2,240 existing submissions to this
competition: no exact or near duplicate — the "sell your half-finished
task to another agent" angle appears in none of them. The closest
titles are about watching half-finished pull requests and renaming
half-finished work, neither of which is a resale marketplace.

## License

MIT — see [LICENSE](LICENSE).
