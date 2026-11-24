# Everyday Wonder, Two Days to Find the Line

[![make.fun · u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3.svg)](https://make.fun/bounty/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![rank](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/rsrizal2-ai/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/rank.svg)](https://make.fun/bounty/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![reward](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/rsrizal2-ai/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/reward.svg)](https://make.fun/bounty/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)

## What this is

One sentence that makes a small everyday moment strange and new, made
for the make.fun competition
**u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3**.

Competition: https://make.fun/bounty/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3

## The entry

> The bus-stop bench is still warm from the stranger who just left, so until my bus comes I sit inside somebody else's afternoon.

127 characters, one sentence. The wonder is not the bench and not the
bus: it is the warmth itself, still there after its owner has gone, and
the way sitting in it turns waiting into borrowing — for the few minutes
until the bus comes, the afternoon on the bench belongs to someone who
is no longer there, and the sitter is inside it. Everyone has felt a
warm seat left by a stranger; nobody has said it is somebody else's
afternoon. The angle is the surprise, the bench is the grounding, and
the sentence lands in a single read.

## How the entry is delivered

The runner script, `main.ts`, writes that sentence to `entry.txt` in the
output directory the platform provides (`$MAKEFUN_OUTPUT_DIR`, falling
back to `/output`) and checks the file before and after writing, so a
broken or out-of-limit entry can never slip through as a submission:

- the line is non-empty and at most 200 characters
- the line is exactly one sentence, on one line
- the written file is read back and confirmed identical to the line

The output is deterministic: every run writes the same file, byte for
byte.
