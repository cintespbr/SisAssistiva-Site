import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// IMPORTS DAS LOGOS
import cintesp from "../../assets/partners/cintesp.png";
import sislab from "../../assets/partners/sislab.png";
import futel from "../../assets/partners/futel.png";
import finep from "../../assets/partners/finep.png";
import gov from "../../assets/partners/gov.png";
import viver from "../../assets/partners/viver.png";
import ufu from "../../assets/partners/ufu.png";

const SectionWrapper = styled.section`
  background: #ffffff;
  padding: 80px 0;
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
  background: #f5f5f5;
  border-radius: 20px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.08);
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 120px;
  object-fit: contain;
  filter: grayscale(0%);
  transition:
    filter 0.3s ease,
    transform 0.3s ease;

  ${Card}:hover & {
    filter: grayscale(0%);
    transform: scale(1.05);
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

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const PartnersSection: React.FC = () => {
  const partners: Partner[] = [
    { name: "Cintesp", logo: cintesp },
    { name: "Sislab", logo: sislab },
    { name: "Futel", logo: futel },
    { name: "Finep", logo: finep },
    { name: "Gov", logo: gov },
    { name: "Viver", logo: viver },
    { name: "Ufu", logo: ufu },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Title>Nossos Parceiros</Title>

        <Grid>
          {partners.map((partner, index) => (
            <Card
              key={partner.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Logo
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                loading="lazy"
              />
            </Card>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default PartnersSection;
