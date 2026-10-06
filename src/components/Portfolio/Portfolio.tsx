import { useRef, useState } from "react";
import type { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { portfolio } from "../../data/portfolio";
import PdfFlipbook from "./PdfFlipbook";
import Transcricao from "./Transcricao";
import { useTranscricao } from "./useTranscricao";
import { useLeituraEmVoz } from "./useLeituraEmVoz";

const PageWrapper = styled.div`
  background: #f5f5f5;
`;

const Hero = styled.section`
  background: linear-gradient(135deg, #0082d3, #6a11cb);
  color: white;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 16px;
  }

  p {
    max-width: 760px;
    margin: 0 auto;
    line-height: 1.7;
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const Section = styled.section`
  padding: 60px 0 0;

  &:last-of-type {
    padding-bottom: 80px;
  }
`;

const CardBox = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #0082d3;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 24px 0 8px;
  }

  p {
    line-height: 1.7;
    margin-bottom: 16px;
  }

  @media (max-width: 576px) {
    padding: 24px 16px;
  }
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 12px 0 20px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
  }

  select {
    padding: 6px 8px;
    border: 2px solid #9bbfd8;
    border-radius: 8px;
    background: white;
    color: #2f2f2f;
  }
`;

const Btn = styled.button<{ $outline?: boolean }>`
  padding: 10px 22px;
  border-radius: 30px;
  border: 2px solid #0082d3;
  background: ${({ $outline }) => ($outline ? "transparent" : "#0082d3")};
  color: ${({ $outline }) => ($outline ? "#0082d3" : "white")};
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover:not(:disabled),
  &:focus-visible {
    background: #00588f;
    border-color: #00588f;
    color: white;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const PageText = styled.div`
  background: #f4f9fd;
  border-left: 4px solid #0082d3;
  border-radius: 8px;
  padding: 16px 20px;
  max-height: 340px;
  overflow-y: auto;

  p:last-child {
    margin-bottom: 0;
  }
`;

const Note = styled.p`
  background: #fff8e1;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.95rem;
`;

const Block = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <Section aria-labelledby={id}>
    <Container>
      <CardBox>
        <h2 id={id}>{title}</h2>
        {children}
      </CardBox>
    </Container>
  </Section>
);

/** O Chrome interrompe falas longas; quebramos em frases curtas. */
const quebrarEmFrases = (paragrafos: string[]) =>
  paragrafos.flatMap((p) =>
    p.length <= 220 ? [p] : p.split(/(?<=[.!?;:])\s+/).filter(Boolean),
  );

export default function Portfolio() {
  const {
    titulo,
    pdf,
    pdfDownloadName,
    transcricaoUrl,
    audiodescricaoPorPagina,
  } = portfolio;
  const [pagina, setPagina] = useState(1);
  const [total, setTotal] = useState(0);
  const [continuo, setContinuo] = useState(false);
  const continuoRef = useRef(false);
  const { paginas, erro } = useTranscricao(transcricaoUrl);
  const voz = useLeituraEmVoz();

  const textoDaPagina = (n: number) => paginas[n - 1] ?? [];
  const descricao = (n: number) => audiodescricaoPorPagina[n];

  const trechosFalados = (n: number) => {
    const texto = textoDaPagina(n);
    const partes = [`Página ${n}.`];
    if (descricao(n)) partes.push(`Descrição das imagens: ${descricao(n)}`);
    if (texto.length) partes.push(...quebrarEmFrases(texto));
    else if (!descricao(n))
      partes.push("Esta página contém apenas imagens ou ilustrações.");
    return partes;
  };

  const lerPagina = (n: number) => {
    voz.ler(trechosFalados(n), () => {
      if (continuoRef.current && n < total) {
        setPagina(n + 1);
        lerPagina(n + 1);
      }
    });
  };

  const trocarPagina = (n: number) => {
    voz.parar();
    setPagina(n);
  };

  const alternarContinuo = (valor: boolean) => {
    continuoRef.current = valor;
    setContinuo(valor);
  };

  const textoAtual = textoDaPagina(pagina);

  return (
    <PageWrapper>
      <Hero>
        <h1>Portfólio Acessível</h1>
        <p>
          Folheie o livreto do SisAssistiva, baixe o PDF, ouça o conteúdo em voz
          alta, leia a transcrição em texto e use o VLibras para ver o texto
          traduzido para Libras.
        </p>
      </Hero>

      <Block id="portfolio-livreto" title={titulo}>
        <p>
          Use os botões ou as setas do teclado para folhear. O texto de cada
          página também aparece logo abaixo, em formato que leitores de tela e o
          VLibras conseguem ler.
        </p>
        <PdfFlipbook
          file={pdf}
          downloadName={pdfDownloadName}
          pagina={pagina}
          onPaginaChange={trocarPagina}
          onTotalPaginas={setTotal}
        />
      </Block>

      <Block id="portfolio-pagina" title={`Texto da página ${pagina}`}>
        <h3>Ouvir (audiodescrição e leitura em voz alta)</h3>
        {voz.suportado ? (
          <Toolbar role="group" aria-label="Controles de leitura em voz alta">
            {voz.estado === "parado" && (
              <Btn type="button" onClick={() => lerPagina(pagina)}>
                ▶ Ouvir esta página
              </Btn>
            )}
            {voz.estado === "lendo" && (
              <Btn type="button" onClick={voz.pausar}>
                ❚❚ Pausar
              </Btn>
            )}
            {voz.estado === "pausado" && (
              <Btn type="button" onClick={voz.retomar}>
                ▶ Continuar
              </Btn>
            )}
            <Btn
              type="button"
              $outline
              onClick={() => {
                alternarContinuo(false);
                voz.parar();
              }}
              disabled={voz.estado === "parado"}
            >
              ■ Parar
            </Btn>
            <label>
              <input
                type="checkbox"
                checked={continuo}
                onChange={(e) => alternarContinuo(e.target.checked)}
              />
              Continuar nas próximas páginas
            </label>
            <label>
              Velocidade
              <select
                value={voz.velocidade}
                onChange={(e) => voz.setVelocidade(Number(e.target.value))}
              >
                <option value={0.8}>Lenta</option>
                <option value={1}>Normal</option>
                <option value={1.3}>Rápida</option>
              </select>
            </label>
          </Toolbar>
        ) : (
          <Note>
            Este navegador não oferece leitura em voz alta. Use um leitor de
            tela, como o NVDA (gratuito, para Windows), para ouvir o texto
            abaixo.
          </Note>
        )}
        {!descricao(pagina) && (
          <Note>
            Esta é uma versão de teste: a voz lê o texto das páginas. A
            descrição das imagens (audiodescrição de fato) ainda precisa ser
            escrita por uma pessoa e cadastrada em{" "}
            <code>src/data/portfolio.ts</code>.
          </Note>
        )}

        <h3>Texto</h3>
        {descricao(pagina) && (
          <p>
            <strong>Descrição das imagens:</strong> {descricao(pagina)}
          </p>
        )}
        <PageText tabIndex={0} aria-label={`Texto da página ${pagina}`}>
          {erro && <p>Não foi possível carregar a transcrição.</p>}
          {!erro && paginas.length === 0 && <p>Carregando texto…</p>}
          {paginas.length > 0 && textoAtual.length === 0 && (
            <p>Esta página contém apenas imagens ou ilustrações.</p>
          )}
          {textoAtual.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </PageText>

        <h3>Libras</h3>
        <p>
          Clique no ícone azul do VLibras (canto da tela), depois selecione o
          texto acima ou clique sobre ele para ver a tradução em Libras.
        </p>
      </Block>

      <Block id="portfolio-transcricao" title="Transcrição completa em texto">
        <Transcricao
          paginas={paginas}
          descricoes={audiodescricaoPorPagina}
          status={erro ? "erro" : paginas.length === 0 ? "carregando" : "ok"}
        />
      </Block>
    </PageWrapper>
  );
}
