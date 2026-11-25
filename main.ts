import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office: I clocked 1,400 hours of photosynthesis this year, and HR still calls it just sitting there.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
