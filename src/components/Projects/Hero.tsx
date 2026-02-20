import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import heroProjects from "../../assets/hero-projetos.png";
import heroLogo from "../../assets/logosis-hero.svg";

const SectionWrapper = styled.section`
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background-image: url(${heroProjects});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const Headline = styled(motion.h1)`
  color: white;
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  z-index: 100;

  @media (max-width: 992px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const textVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HeroSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-end">
            <Headline
              variants={textVariants}
              initial="hidden"
              animate="visible"
            ></Headline>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default HeroSection;
