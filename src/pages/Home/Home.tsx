import React from "react";
import styled from "styled-components";

const PageWrapper = styled.main`
  width: 100%;
  overflow-x: hidden;
`;

/* =========================
   HERO (placeholder branco)
========================= */

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;

/* =========================
   SOBRE O SISASSISTIVA
========================= */

const AboutSection = styled.section`
  width: 100%;
  padding: 120px 20px;
  background-color: #f8fbff;
  display: flex;
  justify-content: center;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const AboutTextWrapper = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0082d3;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
`;

const AboutHighlight = styled.span`
  color: #0082d3;
  font-weight: 600;
`;

const AboutImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const AboutImage = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background-color: #d9ecff;
  border-radius: 12px;
`;

/* =========================
   COMPONENT
========================= */

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection />

      <AboutSection>
        <AboutContainer>
          <AboutTextWrapper>
            <AboutTitle>Sobre o SisAssistiva</AboutTitle>

            <AboutText>
              O <AboutHighlight>SisAssistiva</AboutHighlight> é uma iniciativa
              voltada à promoção da tecnologia assistiva, conectando inovação,
              inclusão e impacto social.
            </AboutText>

            <AboutText>
              Nosso objetivo é fomentar o desenvolvimento de soluções
              tecnológicas que ampliem a autonomia, a acessibilidade e a
              qualidade de vida de pessoas com deficiência.
            </AboutText>
          </AboutTextWrapper>

          <AboutImageWrapper>
            <AboutImage />
          </AboutImageWrapper>
        </AboutContainer>
      </AboutSection>
    </PageWrapper>
  );
};

export default Home;
