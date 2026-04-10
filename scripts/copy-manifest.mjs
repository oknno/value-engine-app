import fs from "node:fs";
import path from "node:path";

const source = path.resolve("dist/.vite/manifest.json");
const target = path.resolve("dist/manifest.json");

if (!fs.existsSync(source)) {
  console.error("Manifest não encontrado em dist/.vite/manifest.json");
  process.exit(1);
}

fs.copyFileSync(source, target);

console.log("Manifest copiado para dist/manifest.json");
