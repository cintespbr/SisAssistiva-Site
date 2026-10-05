import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionWrapper = styled.section`
  background: #f4f4f4;
  padding: 120px 0;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 40px;
`;

const Highlight = styled.span`
  background: yellow;
  padding: 0 6px;
`;

const Item = styled(motion.div)`
  margin-bottom: 60px;
`;

const NumberCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7f5af0, #2cb67d);
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
interface Atividade {
  title: string;
  description: string[];
}

const AtividadesSection: React.FC = () => {
  const items: Atividade[] = [
    {
      title: "Conhecer e mapear os atores da rede",
      description: [
        "Identificar laboratórios, grupos de pesquisa, instituições e iniciativas atuantes em Tecnologia Assistiva",
        "Mapear linhas de pesquisa, tecnologias desenvolvidas, protótipos e soluções existentes",
        "Levantar o estado da arte em Tecnologia Assistiva no contexto nacional",
        "Construir uma visão integrada sobre desafios, oportunidades e potencial tecnológico da rede",
      ],
    },
    {
      title: "Acompanhar e fortalecer os projetos",
      description: [
        "Acompanhar o desenvolvimento dos projetos vinculados à rede SisAssistiva",
        "Apoiar a articulação entre laboratórios, pesquisadores e instituições",
        "Estimular a troca de experiências, metodologias e boas práticas",
        "Identificar desafios técnicos, operacionais ou estratégicos ao longo da execução dos projetos",
      ],
    },
    {
      title: "Integrar e articular a rede SisAssistiva",
      description: [
        "Promover encontros, eventos técnicos e espaços de diálogo entre os atores da rede",
        "Identificar demandas comuns e estimular a cooperação entre os atores",
        "Favorecer a aproximação com empresas, startups, incubadoras e indústria",
        "Estimular conexões nacionais e internacionais em inovação e Tecnologia Assistiva",
      ],
    },
    {
      title: "Apoiar a captação de recursos e parcerias",
      description: [
        "Acompanhar editais, chamadas públicas e oportunidades de fomento relacionadas à Tecnologia Assistiva",
        "Divulgar oportunidades de financiamento para projetos em parceria com empresas e startups",
        "Estimular a submissão de propostas",
        "Apoiar a prospecção de projetos com potencial de impacto social, tecnológico e econômico",
      ],
    },
    {
      title: "Divulgar resultados e impactos da rede",
      description: [
        "Divulgar resultados tecnológicos oriundos dos projetos e parcerias",
        "Evidenciar avanços científicos, técnicos e institucionais da rede",
        "Promover a visibilidade das soluções desenvolvidas para a sociedade",
        "Fortalecer o reconhecimento da Tecnologia Assistiva como área estratégica de inovação",
      ],
    },
    {
      title: "Avaliar, consolidar e projetar os próximos passos",
      description: [
        "Avaliar os resultados alcançados pela rede SisAssistiva",
        "Consolidar aprendizados, metodologias e diretrizes estratégicas",
        "Produzir documentos de síntese e encaminhamentos institucionais",
        "Planejar ações futuras para expansão, sustentabilidade e fortalecimento da rede",
      ],
    },
  ];
  return (
    <SectionWrapper>
      <Container>
        <Title>
          Atividades-Chave do <Highlight>SisAssistiva</Highlight>
        </Title>

        <Row>
          {items.map((item, index) => (
            <Col lg={6} key={index}>
              <Item
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <NumberCircle>{index + 1}</NumberCircle>
                <h4>{item.title}</h4>
                <ul>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </Item>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default AtividadesSection;
