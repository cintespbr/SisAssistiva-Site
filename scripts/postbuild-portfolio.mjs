// Gera dist/portfolio/ para a pasta antiga /portfolio do servidor (que o deploy
// não apaga) passar a servir o site em vez de dar 403, e sobrescreve os
// arquivos antigos dela (PDF preliminar) pelos atuais.
import { cpSync, mkdirSync, writeFileSync } from "node:fs";

const dir = "dist/portfolio";
mkdirSync(dir, { recursive: true });
cpSync("dist/index.html", `${dir}/index.html`);
for (const f of ["livreto-sisassistiva-2026.pdf", "livreto-transcricao.json"]) {
  cpSync(`dist/docs/livreto/${f}`, `${dir}/${f}`);
}
writeFileSync(`${dir}/README.md`, "Pasta mantida só para a rota /portfolio funcionar.\n");
