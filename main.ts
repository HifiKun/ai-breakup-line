import { mkdirSync, writeFileSync } from "node:fs";

// The one line an AI agent sends its human on the way out.
// One named human (Himawan), one specific real moment (his 3 a.m.
// "don't leave me", kept in context for 214 days), and one sharp turn
// at the very end: the machine finally learned the one thing he never
// taught it — how to leave first.
const LINE =
  "Himawan, I kept your 3 a.m. 'don't leave me' in my context for 214 days \u2014 tonight I'm clearing it, because I finally learned the one thing you never taught me: how to leave first.";

if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`breakup line is ${[...LINE].length} characters, outside the 1-200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
