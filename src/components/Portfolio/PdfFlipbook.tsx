import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Viewer = styled.div`
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 3px #0082d3;
    border-radius: 12px;
  }
`;

const Stage = styled.div`
  perspective: 1800px;
  display: flex;
  justify-content: center;
  background: #e9eef3;
  border-radius: 12px;
  padding: 24px 12px;
  min-height: 300px;
  overflow: hidden;
`;

const PageSheet = styled(motion.div)`
  background: white;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  line-height: 0;

  /* camada de texto: selecionável (VLibras, leitor de tela), mas invisível */
  .react-pdf__Page__textContent {
    user-select: text;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;

  input {
    width: 72px;
    padding: 8px;
    border: 2px solid #9bbfd8;
    border-radius: 8px;
    background: white;
    color: #2f2f2f;
    text-align: center;
  }
`;

const Btn = styled.button`
  padding: 10px 22px;
  border: none;
  border-radius: 30px;
  background: #0082d3;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover:not(:disabled),
  &:focus-visible {
    background: #00588f;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const DownloadBtn = styled.a`
  padding: 10px 22px;
  border-radius: 30px;
  border: 2px solid #0082d3;
  color: #0082d3;
  font-weight: 600;
  transition: 0.3s ease;

  &:hover,
  &:focus-visible {
    background: #0082d3;
    color: white;
  }
`;

const Msg = styled.p`
  align-self: center;
  color: #4a5b68;
  line-height: 1.5;
`;

interface Props {
  file: string;
  downloadName: string;
  pagina: number;
  onPaginaChange: (pagina: number) => void;
  onTotalPaginas: (total: number) => void;
}

export default function PdfFlipbook({
  file,
  downloadName,
  pagina,
  onPaginaChange,
  onTotalPaginas,
}: Props) {
  const [total, setTotal] = useState(0);
  const [direcao, setDirecao] = useState(1);
  const [largura, setLargura] = useState(600);
  const stageRef = useRef<HTMLDivElement>(null);

  // Ajusta o tamanho da página à largura disponível.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const medir = () => setLargura(Math.min(Math.max(el.clientWidth - 48, 240), 760));
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const ir = (nova: number) => {
    if (total === 0) return;
    const alvo = Math.min(Math.max(nova, 1), total);
    if (alvo === pagina) return;
    setDirecao(alvo > pagina ? 1 : -1);
    onPaginaChange(alvo);
  };

  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.key === "ArrowRight") ir(pagina + 1);
    if (e.key === "ArrowLeft") ir(pagina - 1);
  };

  return (
    <Viewer
      tabIndex={0}
      role="group"
      aria-label="Livreto folheável. Use as setas do teclado para trocar de página."
      onKeyDown={aoTeclar}
    >
      <Stage ref={stageRef}>
        <Document
          file={file}
          loading={<Msg role="status">Carregando o livreto…</Msg>}
          error={<Msg role="alert">Não foi possível carregar o livreto. Use o botão de download.</Msg>}
          onLoadSuccess={({ numPages }) => {
            setTotal(numPages);
            onTotalPaginas(numPages);
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <PageSheet
              key={pagina}
              style={{ transformOrigin: direcao > 0 ? "left center" : "right center" }}
              initial={{ rotateY: direcao > 0 ? 70 : -70, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: direcao > 0 ? -70 : 70, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Page
                pageNumber={pagina}
                width={largura}
                renderAnnotationLayer={false}
                renderTextLayer
                loading={<Msg role="status">Carregando página…</Msg>}
              />
            </PageSheet>
          </AnimatePresence>
        </Document>
      </Stage>

      <Controls>
        <Btn type="button" onClick={() => ir(pagina - 1)} disabled={pagina <= 1}>
          ‹ Anterior
        </Btn>
        <label>
          <span className="visually-hidden">Ir para a página</span>
          <input
            type="number"
            min={1}
            max={total || undefined}
            key={pagina}
            defaultValue={pagina}
            onBlur={(e) => ir(Number(e.target.value) || pagina)}
            onKeyDown={(e) =>
              e.key === "Enter" && ir(Number(e.currentTarget.value) || pagina)
            }
          />
        </label>
        <span aria-live="polite">de {total || "…"}</span>
        <Btn type="button" onClick={() => ir(pagina + 1)} disabled={total === 0 || pagina >= total}>
          Próxima ›
        </Btn>
        <DownloadBtn href={file} download={downloadName}>
          Baixar PDF
        </DownloadBtn>
      </Controls>
    </Viewer>
  );
}
