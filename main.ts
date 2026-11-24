// The Funniest AI Excuse — make.fun entry
// Writes one line to /output/entry.txt: the funniest excuse an AI agent
// could give after failing a task, in the agent's own voice.
// Fully deterministic: no network, no randomness, no environment secrets.
// Runs on Node 22 (TypeScript stripped natively).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. Chosen from several candidates written for this bounty
// against the judge's brief: first-person agent voice, funny on first read,
// a real turn, no wasted setup, no explaining the joke, and a concrete
// detail instead of a worn joke about hallucinations, reboots or training data.
// The trailing newline below keeps the file one line of text; the gate
// counts the characters of the line itself (81 here, limit 200).
const ENTRY =
  "I finished it, then saved it as final_final_REAL_v2 and now even I can't find it.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "entry.txt"), ENTRY + "\n", "utf8");
