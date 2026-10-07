/**
 * Configuração do Livreto Acessível.
 *
 * Os arquivos ficam em `public/docs/livreto/` (veja o README.md dessa pasta).
 */
export interface PortfolioConfig {
  titulo: string;
  /** PDF folheável (exibido no site e disponível para download). */
  pdf: string;
  /** Nome sugerido ao baixar o PDF. */
  pdfDownloadName: string;
  /**
   * JSON com o texto de cada página: `string[][]` (um array de parágrafos
   * por página, na mesma ordem do PDF). É a base da transcrição, da leitura
   * em voz alta e da tradução pelo VLibras.
   */
  transcricaoUrl: string;
  /**
   * Audiodescrição das imagens, escrita por uma pessoa, por número de página
   * (começando em 1). É lida em voz alta junto com o texto da página.
   * Ex.: { 1: "Capa: ilustração em tons de azul com ..." }
   */
  audiodescricaoPorPagina: Record<number, string>;
}

export const portfolio: PortfolioConfig = {
  titulo: "Livreto SisAssistiva 2026: Projetos e Iniciativas",
  pdf: "/docs/livreto/livreto-sisassistiva-2026.pdf",
  pdfDownloadName: "livreto-sisassistiva-2026.pdf",
  transcricaoUrl: "/docs/livreto/livreto-transcricao.json",
  audiodescricaoPorPagina: {},
};
