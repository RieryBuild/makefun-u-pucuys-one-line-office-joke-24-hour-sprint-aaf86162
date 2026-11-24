// One-Line Office Joke: 24-Hour Sprint — make.fun entry.
// Writes a single one-line joke about office life to entry.txt.
// Node 22, standard library only. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My office chair sinks so slowly that by 3pm my knees are above the desk and I've technically been demoted.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
