import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const SectionWrapper = styled.section`
  background: linear-gradient(135deg, #1c7ed6, #8e1dbd);
  padding: 120px 0;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Card = styled(motion.div)<{ bg: string }>`
  position: relative;
  height: 420px;
  border-radius: 30px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.4s ease;

  &:hover {
    transform: scale(1.03);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const MissaoVisaoValoresSection: React.FC = () => {
  const cards = [
    {
      title: "Missão",
      text: "Desenvolver inovação tecnológica assistiva, viabilizando a transferência destas tecnologias para a sociedade e o setor produtivo.",
      bg: "/missao.jpg",
    },
    {
      title: "Visão",
      text: "Ser referência nacional no desenvolvimento de inovação em tecnologia assistiva.",
      bg: "/visao.jpg",
    },
    {
      title: "Valores",
      text: "Ética, rigor científico, inclusão social, respeito às pessoas e compromisso com o desenvolvimento sustentável.",
      bg: "/valores.jpg",
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Title>Missão, Visão e Valores</Title>

        <Row>
          {cards.map((card, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card
                bg={card.bg}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default MissaoVisaoValoresSection;
