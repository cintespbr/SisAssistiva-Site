import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const SectionWrapper = styled.section`
  background: #ffffff;
  padding: 100px 0;
  overflow: hidden;
`;

const Title = styled.h2`
  background: #94d6ff;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f2f2f;
  margin: 0 auto 30px auto;
  width: 472px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #555;
  line-height: 1.7;
  text-align: center;
`;

const textVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const SobreSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row className="align-items-center">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Title>Sobre o SisAssistiva</Title>
            <Text>
              O SisAssistiva é uma rede nacional de inovação em Tecnologia
              Assistiva que articula pesquisa científica, desenvolvimento
              tecnológico, indústria, governo e sociedade. Nosso foco é
              transformar conhecimento em soluções reais, ampliando o acesso, a
              autonomia e a qualidade de vida das pessoas com deficiência.
            </Text>
          </motion.div>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default SobreSection;
