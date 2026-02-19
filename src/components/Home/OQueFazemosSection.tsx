import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const SectionWrapper = styled.section`
  background: #f2f2f2;
  padding: 120px 0;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 60px;
  color: #2f2f2f;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const AccordionItem = styled(motion.div)`
  background: #e6e6e6;
  padding: 25px 30px;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #dedede;
  }
`;

const AccordionTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 10px;
`;

const AccordionText = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

const ImagesWrapper = styled.div`
  position: relative;
  height: 500px;

  @media (max-width: 992px) {
    margin-top: 60px;
    height: auto;
  }
`;

const FloatingImage = styled(motion.img)<{
  top?: string;
  left?: string;
  right?: string;
}>`
  position: absolute;
  border-radius: 25px;
  width: 70%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);

  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};

  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const OQueFazemosSection: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  const items = [
    {
      title: "Inovação em Tecnologia Assistiva",
      text: "Apoiamos o desenvolvimento de tecnologias, produtos e soluções assistivas que promovem autonomia, acessibilidade e inclusão social.",
    },
    {
      title: "Integração entre Pesquisa e Mercado",
      text: "Conectamos pesquisadores, startups e empresas para transformar conhecimento científico em soluções aplicáveis e escaláveis.",
    },
    {
      title: "Fortalecimento Institucional e Governança",
      text: "Atuamos na construção de diretrizes, estratégias e articulações políticas que fortalecem a rede e ampliam seu alcance nacional.",
    },
    {
      title: "Aproximação com a Sociedade",
      text: "Promovemos o acesso da comunidade às Tecnologias Assistivas, estimulando a experimentação e o diálogo.",
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Title>O que Fazemos</Title>

        <Row className="align-items-center">
          <Col lg={6}>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                onClick={() => setActive(active === index ? null : index)}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionTitle>{item.title}</AccordionTitle>

                {active === index && (
                  <AccordionText
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.text}
                  </AccordionText>
                )}
              </AccordionItem>
            ))}
          </Col>

          <Col lg={6}>
            <ImagesWrapper>
              <FloatingImage
                src="/foto1.jpg"
                alt="Tecnologia Assistiva"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                top="0"
                left="0"
              />

              <FloatingImage
                src="/foto2.jpg"
                alt="Equipe"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                top="150px"
                right="0"
              />

              <FloatingImage
                src="/foto3.jpg"
                alt="Evento"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                top="300px"
                left="50px"
              />
            </ImagesWrapper>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default OQueFazemosSection;
