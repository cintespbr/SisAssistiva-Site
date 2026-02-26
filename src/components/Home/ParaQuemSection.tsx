import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import ParaquemIMG from "../../assets/para-quem-img.png";

// IMPORTAÇÃO DAS IMAGENS DOS CARDS
import conecte from "../../assets/conecte.png";
import suaDemanda from "../../assets/sua-demanda.png";
import vitrine from "../../assets/vitrine.png";
import atualizacoes from "../../assets/atualizacoes.png";

const SectionWrapper = styled.section`
  background: linear-gradient(180deg, #0e5c89 0%, #8e1dbd 100%);
  padding: 120px 0;
  color: white;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const HighlightText = styled.p`
  margin-top: 20px;
  font-weight: 500;
`;

const Image = styled(motion.img)`
  width: 100%;
  border-radius: 30px;
`;

const CardsWrapper = styled.div`
  margin-top: 100px;
`;

const Card = styled(motion.div)<{ bg: string }>`
  position: relative;
  border-radius: 25px;
  height: 400px;
  padding: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: 0.4s ease;

  &:hover {
    transform: translateY(-8px);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const CTAButton = styled(Button)`
  margin-top: 20px;
  border-radius: 30px;
  padding: 10px 25px;
  background: #e5e5e5;
  border: none;
  color: #333;
  font-weight: 500;

  &:hover {
    background: #ffffff;
    color: #000;
  }
`;

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const ParaQuemSection: React.FC = () => {
  const cards = [
    {
      title: "Vitrine SisAssistiva",
      text: "Portfólio de soluções, tecnologias e iniciativas desenvolvidas no âmbito da rede SisAssistiva, reunindo projetos, protótipos, pesquisas aplicadas e resultados com impacto social.",
      button: "Acessar Projetos",
      bg: vitrine,
    },
    {
      title: "Envie sua demanda em Tecnologia Assistiva",
      text: "Canal dedicado ao registro de demandas, desafios e necessidades relacionadas à Tecnologia Assistiva, direcionadas aos laboratórios, projetos e instituições que integram a rede SisAssistiva.",
      button: "Entrar em contato",
      bg: suaDemanda,
    },
    {
      title: "Conecte sua iniciativa à Rede SisAssistiva",
      text: "Espaço de diálogo voltado a empresas, startups e organizações interessadas em colaborar com a rede, propor parcerias, desenvolver soluções conjuntas ou ampliar o impacto de tecnologias assistivas.",
      button: "Entrar em contato",
      bg: conecte,
    },
    {
      title: "Atualizações e eventos da Rede SisAssistiva",
      text: "Notícias, chamadas públicas, eventos, encontros técnicos e informações relevantes para os atores que integram ou acompanham o ecossistema nacional de Tecnologia Assistiva.",
      button: "Ver eventos",
      bg: atualizacoes,
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <Title
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Para Quem é o SisAssistiva
            </Title>

            <List>
              <li>Pesquisadores e ICTs que desenvolvem soluções em TA</li>
              <li>
                Empresas e Startups interessadas em inovação com impacto social
              </li>
              <li>Gestores públicos e formuladores de políticas</li>
              <li>Associações e usuários de Tecnologia Assistiva</li>
              <li>Investidores e instituições de fomento</li>
            </List>

            <HighlightText>
              Se você atua ou acredita em inovação inclusiva, o SisAssistiva é o
              seu lugar.
            </HighlightText>
          </Col>

          <Col lg={6}>
            <Image
              src={ParaquemIMG}
              alt="Tecnologia"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </Col>
        </Row>

        <CardsWrapper>
          <Row>
            {cards.map((card, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card
                  bg={card.bg}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h5>{card.title}</h5>
                  <p>{card.text}</p>
                  <CTAButton>{card.button}</CTAButton>{" "}
                </Card>
              </Col>
            ))}
          </Row>
        </CardsWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ParaQuemSection;
