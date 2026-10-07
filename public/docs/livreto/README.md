# Arquivos do Livreto Acessível

Tudo nesta pasta é servido na raiz do site (`public/docs/livreto/x.pdf` → `/docs/livreto/x.pdf`).
Os caminhos são configurados em `src/data/portfolio.ts`.

| Arquivo | O que é |
| --- | --- |
| `livreto-sisassistiva-2026.pdf` | PDF folheado no site e disponível para download |
| `livreto-transcricao.json` | Texto de cada página (`string[][]`, parágrafos por página). Alimenta a transcrição, a leitura em voz alta e o VLibras |

## Como o livreto é acessível

- **Libras:** o widget VLibras traduz texto HTML. Por isso o texto de cada página é exibido como HTML (não só imagem do PDF).
- **Audiodescrição / voz:** botão "Ouvir esta página" usa a Web Speech API do navegador (gratuita, sem bibliotecas). Descrições de imagens escritas por uma pessoa entram em `audiodescricaoPorPagina` (`src/data/portfolio.ts`) e são lidas junto.
- **Transcrição:** seção com o texto de todas as páginas.

## Trocar o PDF

1. Copie o novo PDF para esta pasta e atualize `pdf` em `src/data/portfolio.ts`.
2. Regere a transcrição (precisa do `pdftotext`, do pacote poppler):

   ```bash
   pdftotext -enc UTF-8 novo.pdf texto.txt
   ```

   e converta para `livreto-transcricao.json` (um array de páginas; cada página é um array de parágrafos). Páginas sem texto (só imagem) ficam como `[]`.

PDFs escaneados (só imagem) precisam de OCR antes.
