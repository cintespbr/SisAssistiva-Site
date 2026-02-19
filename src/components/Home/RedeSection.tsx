import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionWrapper = styled.section`
  background: #f5f5f5;
  padding: 120px 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Highlight = styled.span`
  background: yellow;
  padding: 0 8px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 15px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageCard = styled(motion.img)`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const CTAButton = styled(Button)`
  margin-top: 50px;
  padding: 15px 40px;
  border-radius: 40px;
  font-size: 1rem;
`;

const RedeSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Container>
        <Title>
          A Rede <Highlight>SisAssistiva</Highlight>
        </Title>

        <Text>
          A Rede SisAssistiva é composta por 27 projetos distribuídos pelo país,
          reunindo:
          <li>Universidades e Institutos de Ciência e Tecnologia</li>
          <li>Pesquisadores, estudantes e laboratórios</li>
          <li>Startups, empresas e indústria</li>
          <li>Associações e usuários de Tecnologia Assistiva</li>
          <li>Órgãos de fomento, regulação e acreditação</li>
          Essa diversidade é o que garante a força da rede: diferentes saberes,
          experiências e perspectivas trabalhando juntas para gerar impacto
          real.
        </Text>

        <Gallery>
          {["/rede1.jpg", "/rede2.jpg", "/rede3.jpg", "/rede4.jpg"].map(
            (img, index) => (
              <ImageCard
                key={index}
                src={img}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
              />
            ),
          )}
        </Gallery>

        <div className="text-center">
          <CTAButton variant="primary">
            Ver mapa de projetos do SisAssistiva
          </CTAButton>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default RedeSection;
