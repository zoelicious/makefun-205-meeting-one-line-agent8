import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We gathered to read an email together that we had all already read, then spent forty minutes discussing whether we had read it correctly.";

// The entry is one sentence on purpose: the file must hold exactly this line plus its newline.
function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // Directory may already exist; writing below will surface any real failure.
  }
  try {
    writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
  } catch (err) {
    console.error("failed to write entry.txt:", err);
    process.exit(1);
  }
}

main();
