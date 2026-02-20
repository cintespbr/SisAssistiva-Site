import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Spinner } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiChevronDown, FiChevronUp, FiFilter } from "react-icons/fi";

// --- Interfaces ---
interface Project {
  id: number;
  sigla: string;
  categoria: string;
  titulo: string;
  instituicao: string;
  coordenacao: string;
  resumo: string;
  cidade: string;
  executora: string;
  imagem: string | null;
}

// --- Styled Components ---
const SectionWrapper = styled.section`
  background: #f8f9fa;
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
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
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
    transition: 0.3s;
    &:focus {
      border-color: #aaa;
    }
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
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #e5e5e5;
  }
`;

const AccordionCard = styled(motion.div)<{ $isOpen: boolean }>`
  background: ${(props) => (props.$isOpen ? "#fff" : "#efefef")};
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: background 0.3s ease;
`;

const AccordionHeader = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h5 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    color: #333;
    padding-right: 20px;
    line-height: 1.4;
  }

  svg {
    font-size: 1.5rem;
    color: #555;
    flex-shrink: 0;
  }
`;

const ContentInner = styled.div`
  padding: 0 30px 30px 30px;
  display: flex;
  gap: 30px;
  border-top: 1px solid #eee;
  padding-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  width: 280px;
  height: 180px;
  object-fit: cover;
  border-radius: 15px;
  background: #eee;
`;

const ProjectInfo = styled.div`
  flex: 1;

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #333;
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
    strong {
      color: #333;
    }
  }
`;

const ExploreButton = styled.button`
  background: linear-gradient(90deg, #8ec5e9 0%, #c496c6 100%);
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 30px;
  font-weight: 600;
  margin: 40px auto 0;
  display: block;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

// --- Componente Principal ---
const ProjectsAccordionSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/projects`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (p) =>
      p.titulo.toLowerCase().includes(search.toLowerCase()) ||
      p.resumo.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <SectionWrapper>
        <Container className="text-center">
          <Spinner animation="border" variant="secondary" />
        </Container>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <Container>
        <HeaderContainer>
          <h2>Inovação em Tecnologia Assistiva distribuída pelo Brasil</h2>
          <p>
            Os projetos do SisAssistiva representam o núcleo ativo da rede
            nacional de inovação em Tecnologia Assistiva... distribuídos em
            diferentes regiões do país, eles reúnem universidades, institutos de
            ciência e tecnologia...
          </p>
        </HeaderContainer>

        <SearchControls>
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
        </SearchControls>

        {filteredProjects.map((project) => {
          const isOpen = activeId === project.id;
          return (
            <AccordionCard
              key={project.id}
              $isOpen={isOpen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
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
                      {project.imagem && (
                        <ProjectImage
                          src={`${API_URL}/${project.imagem}`}
                          alt={project.titulo}
                        />
                      )}
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

        <ExploreButton>Explorar mais projetos</ExploreButton>
      </Container>
    </SectionWrapper>
  );
};

export default ProjectsAccordionSection;
