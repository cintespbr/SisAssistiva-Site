// Gera dist/portfolio/ para a pasta antiga /portfolio do servidor (que o deploy
// não apaga) passar a servir o site em vez de dar 403. O livreto fica só em
// /docs/livreto/, que é de onde o site carrega.
import { cpSync, mkdirSync, writeFileSync } from "node:fs";

const dir = "dist/portfolio";
mkdirSync(dir, { recursive: true });
cpSync("dist/index.html", `${dir}/index.html`);
writeFileSync(`${dir}/README.md`, "Pasta mantida só para a rota /portfolio funcionar.\n");
