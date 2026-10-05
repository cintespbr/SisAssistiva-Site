import React from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

// IMPORTAÇÃO DAS IMAGENS
import bioprot from "../../assets/showcase/imagem_bioprot.png";
import ufcgcert from "../../assets/showcase/imagem_ufcgcert.png";
import dreanns from "../../assets/showcase/imagem_dreanns.jpg";
import tecnoaging from "../../assets/showcase/imagem_tecnoaging.png";
import fabict from "../../assets/showcase/imagem_fabict_cer.png";
import amputsus from "../../assets/showcase/imagem_amputsus.jpg";
import crmIot from "../../assets/showcase/imagem_crm_iot.png";
import duaGames from "../../assets/showcase/imagem_dua_games.jpg";
import lita from "../../assets/showcase/imagem_lita.png";
import reablita from "../../assets/showcase/imagem_reablita.png";
import sensegames from "../../assets/showcase/imagem_sensegames.jpg";
import opMfa from "../../assets/showcase/imagem_op_mfa.jpg";
import neurobeep from "../../assets/showcase/imagem_neurobeep.png";
import aleta from "../../assets/showcase/imagem_aleta.jpg";
import teclaboral from "../../assets/showcase/imagem_teclaboral.png";
import monan from "../../assets/showcase/imagem_monan.png";
import ducassist from "../../assets/showcase/imagem_3ducassist.jpg";
import neurosutre from "../../assets/showcase/imagem_neurosutre.jpg";
import sivam from "../../assets/showcase/imagem_sivam.jpg";
import cuidarlab from "../../assets/showcase/imagem_cuidarlab.png";
import pdcomp from "../../assets/showcase/imagem_pdcomp.png";
import rps50 from "../../assets/showcase/imagem_rps50_ta.jpg";
import tecincluir from "../../assets/showcase/imagem_tecincluir.png";
import reabnet from "../../assets/showcase/imagem_reabnet.jpg";
import roboptica from "../../assets/showcase/imagem_roboptica.png";

const SectionWrapper = styled.section`
  background: #f5f5f5;
  padding: 120px 0;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Highlight = styled.span`
  background: yellow;
  padding: 0 8px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 60px;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 40px;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 30px;
`;

const ImageCard = styled.img`
  width: 260px;
  height: 160px;
  object-fit: cover;
  border-radius: 20px;
  flex-shrink: 0;
`;

const CTAButton = styled(Button)`
  margin-top: 70px;
  padding: 15px 40px;
  border-radius: 40px;
  font-size: 1rem;
`;

const RedeSection: React.FC = () => {
  const images = [
    bioprot,
    ufcgcert,
    dreanns,
    tecnoaging,
    fabict,
    amputsus,
    crmIot,
    duaGames,
    lita,
    reablita,
    sensegames,
    opMfa,
    neurobeep,
    aleta,
    teclaboral,
    monan,
    ducassist,
    neurosutre,
    sivam,
    cuidarlab,
    pdcomp,
    rps50,
    tecincluir,
    reabnet,
    roboptica,
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <SectionWrapper>
      <Container>
        <Title>
          A Rede <Highlight>SisAssistiva</Highlight>
        </Title>

        <Text>
          A Rede SisAssistiva é composta por 27 projetos distribuídos pelo país,
          reunindo:
          <li>Universidades e Institutos de Ciência e Tecnologia</li>
          <li>Pesquisadores, estudantes e laboratórios</li>
          <li>Startups, empresas e indústria</li>
          <li>Associações e usuários de Tecnologia Assistiva</li>
          <li>Órgãos de fomento, regulação e acreditação</li>
          Essa diversidade é o que garante a força da rede: diferentes saberes,
          experiências e perspectivas trabalhando juntas para gerar impacto
          real.
        </Text>

        <CarouselWrapper>
          <CarouselTrack
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {duplicatedImages.map((img, index) => (
              <ImageCard key={index} src={img} />
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <div className="text-center">
          <CTAButton
            variant="primary"
            href="https://sisassistiva.cintespbr.org/"
            target="_blank"
          >
            Ver mapa de projetos do SisAssistiva
          </CTAButton>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default RedeSection;
