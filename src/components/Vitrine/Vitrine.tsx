import { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

/* =============================
   IMPORTAÇÃO DAS IMAGENS
============================= */
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
import vitrineIMG from "../../assets/section1-vitrine.avif";

/* =============================
   ESTILOS
============================= */

const PageWrapper = styled.div`
  background: #ffffff;
  padding: 100px 0;
`;

const Section = styled.section`
  margin-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #0082d3;
  margin-bottom: 8px;
`;

const Text = styled.p`
  line-height: 1.7;
`;

const GrayBox = styled.div`
  background: #e0e0e0;
  border-radius: 20px;
  height: 220px;
`;

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const Slide = styled(motion.div)`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;

  @media (max-width: 992px) {
    height: 340px;
  }

  @media (max-width: 576px) {
    height: 260px;
  }
`;

const GradientBottom = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 100%);
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  right: 32px;
  color: white;
  z-index: 2;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const NavArrow = styled.button<{ side: "left" | "right" }>`
  position: absolute;
  top: 37%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 48px;
  color: #0082d3;
  cursor: pointer;
  z-index: 3;

  ${({ side }) => (side === "left" ? "left: -93px;" : "right: -93px;")}

  @media (max-width: 992px) {
    ${({ side }) => (side === "left" ? "left: 8px;" : "right: 8px;")}
    font-size: 36px;
    color: #ffffff;
  }
`;

const ThumbsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  padding-bottom: 6px;

  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`;

const ThumbButton = styled.button<{ active: boolean }>`
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: 0.3s ease;

  flex: 0 0 auto;
`;

const ThumbImage = styled.img`
  width: 96px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
`;

const PdfButton = styled.a`
  display: inline-block;
  padding: 14px 28px;
  border-radius: 40px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  background: linear-gradient(90deg, #4da6ff, #b56dff);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const DocumentsSection = styled.section`
  background: #f7f9fc;
  padding: 80px 40px;
  border-radius: 24px;
  text-align: center;
`;

const DocumentTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #0082d3;
  margin-bottom: 16px;
`;

const DocumentText = styled.p`
  max-width: 700px;
  margin: 0 auto 32px auto;
  line-height: 1.7;
`;

const DocumentCard = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 20px;
  max-width: 500px;
  margin: 0 auto 32px auto;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const DocumentIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
`;

/* =============================
   COMPONENTE
============================= */

export default function Vitrine() {
  const products = [
    {
      id: "1",
      image: bioprot,
      title: "Sistemas inovadores para próteses de membro superior",
      description:
        "Desenvolvimento de tecnologias para melhorar a usabilidade de próteses de membros superiores, com feedback sensorial, aprendizado de máquina e redução da rejeição do dispositivo.",
    },
    {
      id: "2",
      image: ufcgcert,
      title: "Psilocibina aplicada ao desenvolvimento de pessoas com TEA",
      description:
        "Pesquisa pioneira no Brasil para desenvolvimento de medicamentos à base de psilocibina, com foco no desenvolvimento cognitivo e socioemocional de pessoas com TEA.",
    },
    {
      id: "3",
      image: dreanns,
      title: "Dispositivos de reabilitação e neurotecnologias assistivas",
      description:
        "Desenvolvimento de próteses, órteses, cadeiras de rodas e aplicações de reabilitação com realidade virtual, interfaces cérebro-máquina e inteligência artificial.",
    },
    {
      id: "4",
      image: tecnoaging,
      title: "Tecnologia assistiva para avaliação funcional de idosos",
      description:
        "Uso de sensores, aplicativos e inteligência artificial para avaliação clínico-funcional, prevenção de quedas e promoção da autonomia de idosos usuários do SUS.",
    },
    {
      id: "5",
      image: fabict,
      title: "Automação na fabricação de órteses e próteses personalizadas",
      description:
        "Aplicação de CAD, CAM, CAE e impressão 3D para reduzir custos, tempo de produção e ampliar o acesso a órteses e próteses personalizadas.",
    },
    {
      id: "6",
      image: amputsus,
      title: "Soluções inovadoras em protetização para usuários do SUS",
      description:
        "Desenvolvimento do aplicativo AMPUTSUS e modernização dos processos de prescrição e adaptação de próteses de membros inferiores.",
    },
    {
      id: "7",
      image: crmIot,
      title: "Cadeira de rodas motorizada com telemetria IoT",
      description:
        "Cadeira de rodas adaptativa com monitoramento remoto por IoT, incluindo GPS, alertas de falhas, botão de emergência e componentes de baixo custo.",
    },
    {
      id: "8",
      image: duaGames,
      title: "Games acessíveis para desenvolvimento cognitivo",
      description:
        "Criação colaborativa de jogos digitais acessíveis para crianças e adolescentes com deficiência, baseados em desenho universal.",
    },
    {
      id: "9",
      image: lita,
      title: "Desenho universal e comunicação acessível",
      description:
        "Desenvolvimento de soluções em acessibilidade, comunicação tátil, aplicações digitais e mobiliário acessível.",
    },
    {
      id: "10",
      image: reablita,
      title: "Tecnologias móveis para reabilitação auditiva",
      description:
        "Rede de laboratórios dedicada ao desenvolvimento de soluções tecnológicas para diagnóstico, monitoramento e reabilitação auditiva ao longo da vida.",
    },
    {
      id: "11",
      image: sensegames,
      title: "Jogos multissensoriais para pessoas com deficiência",
      description:
        "Desenvolvimento de jogos sérios com realidade virtual, aumentada e robótica assistiva para promover inclusão e desenvolvimento cognitivo.",
    },
    {
      id: "12",
      image: opMfa,
      title: "Órteses posturais para autonomia de idosos",
      description:
        "Avaliação do impacto de órteses posturais na mobilidade funcional, atividade física e autonomia de pessoas idosas.",
    },
    {
      id: "13",
      image: neurobeep,
      title: "Robótica educacional para inclusão de crianças com deficiência",
      description:
        "Integração de neurociência, robótica e interfaces cérebro-máquina para inclusão educacional de crianças com deficiências motoras severas.",
    },
    {
      id: "14",
      image: aleta,
      title: "Tecnologia assistiva para alfabetização inclusiva",
      description:
        "Mesa digital interativa baseada em desenho universal para apoiar o processo de alfabetização de crianças com deficiência.",
    },
    {
      id: "15",
      image: teclaboral,
      title: "Tecnologia assistiva para autonomia laboral",
      description:
        "Desenvolvimento de dispositivos assistivos para autonomia diária e inclusão no trabalho, com formação de profissionais e transferência tecnológica.",
    },
    {
      id: "16",
      image: monan,
      title: "Plataforma inteligente para diagnóstico do TEA",
      description:
        "Solução integrada de software e hardware para apoio ao diagnóstico e desenvolvimento cognitivo e comunicacional de crianças autistas.",
    },
    {
      id: "17",
      image: ducassist,
      title: "Tecnologias assistivas para educação inclusiva",
      description:
        "Uso de impressão 3D, jardins sensoriais e outras tecnologias assistivas para apoiar práticas educacionais inclusivas.",
    },
    {
      id: "18",
      image: neurosutre,
      title: "Estimulação não invasiva para supressão de tremores",
      description:
        "Pesquisa sobre estimulação somatossensitiva para redução de tremores associados à doença de Parkinson e tremor essencial.",
    },
    {
      id: "19",
      image: sivam,
      title: "Análise do movimento humano com IA e sensores",
      description:
        "Uso de inteligência artificial, sensores vestíveis e IoT para análise de movimento humano de baixo custo.",
    },
    {
      id: "20",
      image: cuidarlab,
      title: "Tecnologias de cuidados sociais",
      description:
        "Desenvolvimento de soluções tecnológicas e estratégias de formação para cuidados sociais de pessoas com deficiência e idosos.",
    },
    {
      id: "21",
      image: pdcomp,
      title: "Pé protético em compósito de baixo custo",
      description:
        "Desenvolvimento de próteses de membro inferior em material compósito, com foco em conforto, durabilidade e custo competitivo.",
    },
    {
      id: "22",
      image: rps50,
      title: "Rede de pesquisa em saúde 5.0 e tecnologia assistiva",
      description:
        "Consolidação de uma rede de pesquisa para desenvolvimento de soluções assistivas centradas no indivíduo.",
    },
    {
      id: "23",
      image: tecincluir,
      title: "Rede interinstitucional de tecnologia assistiva",
      description:
        "Desenvolvimento e validação de soluções de tecnologia assistiva por meio de uma rede colaborativa de laboratórios.",
    },
    {
      id: "24",
      image: reabnet,
      title: "Telerreabilitação para usuários de cadeiras de rodas",
      description:
        "Desenvolvimento e teste de estratégias de avaliação e intervenção em telerreabilitação para usuários com comprometimento de ombro.",
    },
    {
      id: "25",
      image: roboptica,
      title: "Robótica assistiva e reabilitação inteligente",
      description:
        "Integração de robótica, realidade virtual, biossensores e inteligência artificial para assistência e reabilitação.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <PageWrapper>
      <Container>
        {/* INTRO */}
        <Section>
          <Row className="align-items-center">
            <Col lg={8}>
              <Title>O que você encontra na Vitrine SisAssistiva</Title>
              <Text>
                <li>Tecnologias assistivas desenvolvidas no âmbito da rede</li>
                <li>Protótipos e soluções em fase de desenvolvimento</li>
                <li>
                  Resultados tecnológicos com potencial de aplicação prática
                </li>
                <li>
                  Iniciativas voltadas à transferência tecnológica e inovação
                </li>
              </Text>
              <Text>
                As informações apresentadas buscam facilitar a compreensão do
                estágio de cada tecnologia, seus objetivos e suas possibilidades
                de uso ou evolução.
              </Text>
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <img
                src={vitrineIMG}
                alt="Imagem ilustrativa da Vitrine SisAssistiva"
                style={{ width: "100%", borderRadius: "16px" }}
              />
            </Col>
          </Row>
        </Section>

        {/* CARROSSEL */}
        <Section>
          <Title className="text-center mb-4">
            Conheça as tecnologias assistivas em desenvolvimento
          </Title>
          <Text className="text-center mb-4">
            A Vitrine SisAssistiva tem como objetivo dar visibilidade às
            entregas da rede, estimular conexões estratégicas e apoiar a
            aproximação entre ciência, setor produtivo e sociedade. Ela também
            funciona como um ponto de referência para gestores públicos,
            empresas, investidores e demais interessados em inovação em
            Tecnologia Assistiva.
          </Text>
          <CarouselWrapper>
            <NavArrow side="left" onClick={prevSlide}>
              ‹
            </NavArrow>

            <Slide
              key={current}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SlideImage src={products[current].image} />
              <GradientBottom />
              <SlideContent>
                <h3>{products[current].title}</h3>
                <p>{products[current].description}</p>
              </SlideContent>
            </Slide>

            <NavArrow side="right" onClick={nextSlide}>
              ›
            </NavArrow>

            <ThumbsWrapper>
              {products.map((product, index) => (
                <ThumbButton
                  key={product.id}
                  active={index === current}
                  onClick={() => setCurrent(index)}
                >
                  <ThumbImage src={product.image} />
                </ThumbButton>
              ))}
            </ThumbsWrapper>
          </CarouselWrapper>
        </Section>
        <Section>
          <DocumentsSection>
            <DocumentTitle>Catálogo Técnico da Vitrine</DocumentTitle>

            <DocumentText>
              Acesse o catálogo completo com informações detalhadas sobre as
              tecnologias desenvolvidas pela Rede SisAssistiva. O documento
              reúne descrições técnicas, objetivos, estágios de desenvolvimento
              e possibilidades de aplicação.
            </DocumentText>

            <DocumentCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <DocumentIcon>📄</DocumentIcon>
              <h4>Catálogo Oficial – SisAssistiva</h4>
              <p>Versão completa em PDF com todas as tecnologias mapeadas.</p>
            </DocumentCard>

            <PdfButton
              href="/docs/catalogo-vitrine.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Catálogo Completo
            </PdfButton>
          </DocumentsSection>
        </Section>
      </Container>
    </PageWrapper>
  );
}
