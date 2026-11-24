[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/zeromix555/u-kreutzx-the-funniest-out-of-office-054815cf-entry/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/zeromix555/u-kreutzx-the-funniest-out-of-office-054815cf-entry/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

# The Funniest Out-of-Office

One line of an out-of-office auto-reply, the funniest I could make it, for
the [make.fun bounty](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf).

## The line

> I'm away until Monday. My inbox is in the care of my houseplant, which has been promoted twice and still can't keep itself alive.

## How it is built

`main.ts` (Node 22) is a deterministic program: it writes that one fixed
line to `/output/entry.txt`. No network, no clock, no randomness — run it
twice and the outputs are byte-identical (129 characters, one line).
