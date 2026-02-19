import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ParaquemIMG from "../../assets/para-quem-img.png";

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

const Card = styled(motion.div)`
  background: white;
  border-radius: 25px;
  padding: 30px;
  text-align: center;
  color: #333;
  height: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const CTAButton = styled(Button)`
  margin-top: 20px;
  border-radius: 30px;
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
            {[1, 2, 3, 4].map((_, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CardImage src={`/card${index + 1}.jpg`} />
                  <h5>Título do Card</h5>
                  <p>Descrição do conteúdo institucional.</p>
                  <CTAButton variant="primary">Saiba mais</CTAButton>
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
