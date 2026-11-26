import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Fechado uma vez, o popup não volta na mesma sessão do navegador. */
const CHAVE = "popup-livro-2026-fechado";

const jaFechado = () => {
  try {
    return sessionStorage.getItem(CHAVE) === "1";
  } catch {
    return false;
  }
};

const Topo = styled.div`
  background: linear-gradient(135deg, #0082d3, #6a11cb);
  color: white;
  text-align: center;
  padding: 32px 24px;

  span {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
  }
`;

const Texto = styled.div`
  padding: 24px 24px 0;
  text-align: center;

  p {
    line-height: 1.7;
    margin-bottom: 14px;
  }
`;

const Acoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 8px 24px 28px;

  a,
  button {
    padding: 10px 22px;
    border-radius: 30px;
    border: 2px solid #0082d3;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s ease;
  }

  a {
    background: #0082d3;
    color: white;
  }

  button {
    background: transparent;
    color: #0082d3;
  }

  a:hover,
  a:focus-visible,
  button:hover,
  button:focus-visible {
    background: #00588f;
    border-color: #00588f;
    color: white;
  }
`;

const PopupLancamento = () => {
  const [aberto, setAberto] = useState(() => !jaFechado());

  const fechar = () => {
    try {
      sessionStorage.setItem(CHAVE, "1");
    } catch {
      // Navegação privada pode bloquear o armazenamento; só fecha.
    }
    setAberto(false);
  };

  return (
    <Modal
      show={aberto}
      onHide={fechar}
      centered
      aria-labelledby="popup-livro-titulo"
    >
      <Topo>
        <span>Lançamento</span>
        <h2 id="popup-livro-titulo">
          Livro SisAssistiva: projetos e iniciativas 2026
        </h2>
      </Topo>
      <Texto>
        <p>
          Conheça sobre os projetos da Rede SisAssistiva! Reunimos em um só
          livro as iniciativas que estão desenvolvendo Tecnologia Assistiva no
          Brasil, com pesquisa, inovação e colaboração para ampliar a autonomia,
          a inclusão e a participação das pessoas com deficiência.
        </p>
        <p>
          Folheie online, baixe o PDF, ouça o conteúdo em voz alta ou acompanhe
          em Libras com o VLibras.
        </p>
      </Texto>
      <Acoes>
        <Link to="/portfolio" onClick={fechar}>
          Conhecer o lançamento
        </Link>
        <button type="button" onClick={fechar}>
          Fechar
        </button>
      </Acoes>
    </Modal>
  );
};

export default PopupLancamento;
