import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const SectionWrapper = styled.section`
  background: #ffffff;
  padding: 0px 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2f2f2f;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled(motion.div)`
  background: #d9d9d9;
  border-radius: 20px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.08);
  }
`;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const PartnersSection: React.FC = () => {
  const partners = Array.from({ length: 10 });

  return (
    <SectionWrapper>
      <Container>
        <Title>Nossos Parceiros</Title>

        <Grid>
          {partners.map((_, index) => (
            <Card
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Logo entra aqui depois */}
            </Card>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default PartnersSection;
