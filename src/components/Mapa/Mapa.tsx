import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroBg from "../../assets/hero-mapa.png";
import mapaPreview from "../../assets/previa-mapa.png";

/* ================= HERO ================= */

const HeroSection = styled.section`
  position: relative;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  filter: blur(2.5px);
  transform: scale(1.1);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(92, 92, 92, 0.27);
`;

const HeroTitle = styled(motion.h1)`
  position: relative;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0 20px;
  }
`;

/* ================= PREVIEW SECTION ================= */

const PreviewSection = styled.section`
  background: #f5f5f5;
  padding: 100px 0;
`;

const MapWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`;

const MapImage = styled.img`
  width: 100%;
  display: block;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 30px;
`;

const CTAButton = styled(Button)`
  padding: 14px 35px;
  border-radius: 40px;
  font-weight: 500;
`;

const MapaPreview: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <HeroSection>
        <HeroBackground />
        <HeroOverlay />
        <HeroTitle
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mapa de Projetos SisAssistiva
        </HeroTitle>
      </HeroSection>

      {/* PREVIEW */}
      <PreviewSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <SectionTitle>
                Explore a Rede SisAssistiva pelo Brasil
              </SectionTitle>

              <SectionText>
                O mapa interativo reúne os projetos, instituições e iniciativas
                que compõem a Rede SisAssistiva. Navegue pelas regiões, filtre
                por categorias e conheça as soluções desenvolvidas em Tecnologia
                Assistiva.
              </SectionText>

              <a
                href="https://sisassistiva.cintespbr.org/"
                target="_blank" // abre em nova guia/janela
                rel="noopener noreferrer" // sempre adicione isto por segurança
              >
                <CTAButton variant="primary">Acessar Mapa Completo</CTAButton>
              </a>
            </Col>

            <Col lg={6}>
              <MapWrapper>
                <MapImage src={mapaPreview} alt="Prévia do mapa SisAssistiva" />
              </MapWrapper>
            </Col>
          </Row>
        </Container>
      </PreviewSection>
    </>
  );
};

export default MapaPreview;
