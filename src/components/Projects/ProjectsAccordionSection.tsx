import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiChevronDown, FiChevronUp, FiFilter } from "react-icons/fi";

import { projetos } from "../../data/projetos";
import type { Projeto } from "../../data/projetos";
/* ---------- Styled Components ---------- */

const SectionWrapper = styled.section`
  background: #ffffff;
  padding: 80px 0;
  font-family: "Inter", sans-serif;
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 850px;
    margin: 0 auto;
  }
`;

const SearchControls = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 700px;

  input {
    width: 100%;
    padding: 12px 20px 12px 50px;
    border-radius: 30px;
    border: 1px solid #e0e0e0;
    background: #eeeeee;
    outline: none;
  }

  svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 25px;
  border-radius: 30px;
  border: 1px solid #e0e0e0;
  background: #eeeeee;
  color: #666;
  cursor: pointer;
`;

const AccordionCard = styled(motion.div)<{ $isOpen: boolean }>`
  background: ${(props) => (props.$isOpen ? "#fff" : "#efefef")};
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  margin-bottom: 15px;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  h5 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
  }
`;

const ContentInner = styled.div`
  padding: 30px;
  display: flex;
  gap: 30px;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  width: 280px;
  height: 180px;
  object-fit: cover;
  border-radius: 15px;
`;

const Button = styled.a`
  margin-top: 40px;
  padding: 12px 35px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(135deg, #0e5c89, #8e1dbd);
  color: white;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
    color: white;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .meta {
    font-size: 0.85rem;
    margin-bottom: 5px;
  }
`;

/* ---------- Component ---------- */

const ProjectsAccordionSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredProjects = projetos.filter(
    (p) =>
      p.titulo.toLowerCase().includes(search.toLowerCase()) ||
      p.resumo.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SectionWrapper>
      <Container>
        <HeaderContainer>
          <h2>Inovação em Tecnologia Assistiva distribuída pelo Brasil</h2>
          <p>
            Os projetos do SisAssistiva representam o núcleo ativo da rede
            nacional de inovação em Tecnologia Assistiva.
          </p>
        </HeaderContainer>

        {/* <SearchControls>
          <SearchWrapper>
            <FiSearch size={20} />
            <input
              placeholder="Pesquisar projeto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrapper>

          <FilterButton>
            <FiFilter /> Filtros
          </FilterButton>
        </SearchControls> */}

        {filteredProjects.map((project: Projeto) => {
          const isOpen = activeId === project.id;

          return (
            <AccordionCard key={project.id} $isOpen={isOpen}>
              <AccordionHeader
                onClick={() => setActiveId(isOpen ? null : project.id)}
              >
                <h5>{project.titulo}</h5>
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </AccordionHeader>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ContentInner>
                      <ProjectImage src={project.imagem} alt={project.titulo} />

                      <ProjectInfo>
                        <h4>{project.titulo}</h4>
                        <p>{project.resumo}</p>

                        <div className="meta">
                          <strong>Coordenação:</strong> {project.coordenacao}
                        </div>

                        <div className="meta">
                          <strong>Instituição:</strong> {project.instituicao}
                        </div>
                      </ProjectInfo>
                    </ContentInner>
                  </motion.div>
                )}
              </AnimatePresence>
            </AccordionCard>
          );
        })}
        <div className="text-center mt-4">
          <Button
            href="https://sisassistiva.cintespbr.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar mais projetos
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ProjectsAccordionSection;
