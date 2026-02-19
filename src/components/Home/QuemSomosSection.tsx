import React from "react";
import styled from "styled-components";
import sislogoHorizontal from "../../assets/sislogohorizontal.svg";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const SectionWrapper = styled.section`
  background: #ffffff;
  padding: 120px 0;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: #2f2f2f;
  margin-bottom: 40px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 24px;
`;

const Image = styled(motion.img)`
  max-width: 100%;
  height: auto;
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

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const QuemSomosSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <Title
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              QUEM SOMOS
            </Title>

            <Paragraph
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              O SisAssistiva, instituído pela Portaria MCTI nº 6.033, de 24 de
              junho de 2022, nasce da necessidade de estruturar, fortalecer e
              dar sustentabilidade a um ecossistema nacional de Tecnologia
              Assistiva.
            </Paragraph>

            <Paragraph
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Somos uma rede que integra universidades, institutos de ciência e
              tecnologia, startups, empresas, associações, órgãos reguladores e
              usuários finais, promovendo soluções inovadoras com impacto social
              direto.
            </Paragraph>

            <Paragraph
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Atuamos desde a pesquisa básica até a transferência tecnológica,
              conectando protótipos, produtos, políticas públicas e mercado.
            </Paragraph>
          </Col>

          <Col lg={6} className="mt-5 mt-lg-0 text-center">
            <Image
              src={sislogoHorizontal}
              alt="SisAssistiva Logo Horizontal"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default QuemSomosSection;
