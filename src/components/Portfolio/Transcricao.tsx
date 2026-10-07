import { useMemo, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Busca = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;

  input {
    flex: 1 1 260px;
    padding: 10px 16px;
    border: 2px solid #9bbfd8;
    border-radius: 30px;
    background: white;
    color: #2f2f2f;
  }
`;

const Chips = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
  gap: 6px;
`;

const Chip = styled.button<{ $ativo: boolean; $vazia: boolean }>`
  padding: 8px 0;
  border-radius: 8px;
  border: 2px solid ${({ $ativo }) => ($ativo ? "#0082d3" : "#d5e3ee")};
  background: ${({ $ativo }) => ($ativo ? "#0082d3" : "white")};
  color: ${({ $ativo }) => ($ativo ? "white" : "#2f2f2f")};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  opacity: ${({ $vazia, $ativo }) => ($vazia && !$ativo ? 0.55 : 1)};

  &:hover,
  &:focus-visible {
    border-color: #0082d3;
  }
`;

const Leitor = styled.article`
  background: #f4f9fd;
  border-left: 4px solid #0082d3;
  border-radius: 8px;
  padding: 20px 24px;

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }

  h3 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
  }

  p {
    line-height: 1.8;
    margin-bottom: 14px;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 8px;
`;

const Btn = styled.button`
  padding: 6px 16px;
  border-radius: 30px;
  border: 2px solid #0082d3;
  background: white;
  color: #0082d3;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus-visible {
    background: #0082d3;
    color: white;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const Resultados = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 320px;
  overflow-y: auto;

  li {
    border-bottom: 1px solid #e3e8ed;
  }

  button {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 10px 4px;
    line-height: 1.5;
    cursor: pointer;
  }

  button:hover,
  button:focus-visible {
    background: #f4f9fd;
  }

  strong {
    color: #0082d3;
    margin-right: 8px;
  }

  mark {
    background: #ffe58a;
  }
`;

const norm = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

interface Props {
  paginas: string[][];
  descricoes: Record<number, string>;
  /** Texto de apoio enquanto as páginas carregam ou falham. */
  status: "carregando" | "erro" | "ok";
}

export default function Transcricao({ paginas, descricoes, status }: Props) {
  const [atual, setAtual] = useState(1);
  const [busca, setBusca] = useState("");
  const total = paginas.length;

  const termo = norm(busca.trim());
  const resultados = useMemo(() => {
    if (termo.length < 2) return [];
    return paginas.flatMap((paragrafos, i) => {
      const texto = paragrafos.join(" ");
      const pos = norm(texto).indexOf(termo);
      if (pos < 0) return [];
      const ini = Math.max(0, pos - 40);
      return [
        {
          pagina: i + 1,
          antes: (ini > 0 ? "…" : "") + texto.slice(ini, pos),
          achado: texto.slice(pos, pos + termo.length),
          depois: texto.slice(pos + termo.length, pos + termo.length + 80) + "…",
        },
      ];
    });
  }, [paginas, termo]);

  const baixarTxt = () => {
    const txt = paginas
      .map((p, i) => `--- Página ${i + 1} ---\n${p.join("\n\n") || "(apenas imagens)"}`)
      .join("\n\n");
    const url = URL.createObjectURL(new Blob([txt], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "livreto-sisassistiva-transcricao.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (status === "carregando") return <p role="status">Carregando transcrição…</p>;
  if (status === "erro") return <p role="alert">Não foi possível carregar a transcrição.</p>;

  const paragrafos = paginas[atual - 1] ?? [];

  return (
    <Wrapper>
      <Busca>
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar uma palavra na transcrição…"
          aria-label="Buscar na transcrição"
        />
        <Btn type="button" onClick={baixarTxt}>
          Baixar transcrição (.txt)
        </Btn>
      </Busca>

      {termo.length >= 2 && (
        <div>
          <p role="status" style={{ marginBottom: 8 }}>
            {resultados.length === 0
              ? "Nenhuma página encontrada."
              : `${resultados.length} página(s) com “${busca.trim()}”:`}
          </p>
          <Resultados>
            {resultados.map((r) => (
              <li key={r.pagina}>
                <button
                  type="button"
                  onClick={() => {
                    setAtual(r.pagina);
                    setBusca("");
                  }}
                >
                  <strong>Página {r.pagina}</strong>
                  {r.antes}
                  <mark>{r.achado}</mark>
                  {r.depois}
                </button>
              </li>
            ))}
          </Resultados>
        </div>
      )}

      <nav aria-label="Escolher página da transcrição">
        <Chips>
          {paginas.map((p, i) => (
            <Chip
              key={i}
              type="button"
              $ativo={atual === i + 1}
              $vazia={p.length === 0}
              aria-label={`Página ${i + 1}${p.length === 0 ? " (apenas imagens)" : ""}`}
              aria-current={atual === i + 1 ? "page" : undefined}
              onClick={() => setAtual(i + 1)}
            >
              {i + 1}
            </Chip>
          ))}
        </Chips>
      </nav>

      <Leitor aria-live="polite">
        <header>
          <h3>
            Página {atual} de {total}
          </h3>
          <Nav>
            <Btn type="button" onClick={() => setAtual(atual - 1)} disabled={atual <= 1}>
              ‹ Anterior
            </Btn>
            <Btn type="button" onClick={() => setAtual(atual + 1)} disabled={atual >= total}>
              Próxima ›
            </Btn>
          </Nav>
        </header>
        {descricoes[atual] && (
          <p>
            <strong>Descrição das imagens:</strong> {descricoes[atual]}
          </p>
        )}
        {paragrafos.length === 0 && !descricoes[atual] && (
          <p>Esta página contém apenas imagens ou ilustrações.</p>
        )}
        {paragrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Leitor>
    </Wrapper>
  );
}
