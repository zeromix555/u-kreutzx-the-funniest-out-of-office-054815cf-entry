import { mkdirSync, writeFileSync } from "node:fs";

// One line of an out-of-office auto-reply, the funniest I could make it:
// the inbox is handed to a houseplant that keeps getting promoted for
// work it cannot do — a real reply a person would set, with a twist the
// reader does not see coming (the promotion), and a kicker that lands
// because the plant cannot even keep itself alive.
const ENTRY =
  "I'm away until Monday. My inbox is in the care of my houseplant, which has been promoted twice and still can't keep itself alive.";

// The gate allows 1 to 140 characters. Fail loudly rather than ever
// shipping an over-long line.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
