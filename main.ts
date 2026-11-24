// One Emoji, One Dream Vacation — make.fun entry.
//
// The program writes exactly one emoji to /output/entry.txt:
// 🛖 — a hut: the overwater bungalow, the dream-vacation postcard
// in a single glyph. No network, no randomness, no model calls;
// the output is byte-identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single emoji of this entry: a hut over the water.
// Chosen over the beach/plane clichés: it names one particular dream
// (a stilt-house stay on a lagoon) instead of any holiday, stays vivid
// at a glance, and reads clearly at small size on any screen.
const EMOJI = "🛖";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
