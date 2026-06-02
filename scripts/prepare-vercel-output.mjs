import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

const outputRoot = ".vercel/output";
const staticDir = `${outputRoot}/static`;
const functionDir = `${outputRoot}/functions/__server.func`;

if (!existsSync("dist/config.json") || !existsSync("dist/client") || !existsSync("dist/server")) {
  throw new Error("Missing Nitro build output. Run vite build before preparing Vercel output.");
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

await cp("dist/config.json", `${outputRoot}/config.json`);
await cp("dist/client", staticDir, { recursive: true });
await cp("dist/server", functionDir, { recursive: true });

console.log("Prepared .vercel/output for Vercel deployment.");
