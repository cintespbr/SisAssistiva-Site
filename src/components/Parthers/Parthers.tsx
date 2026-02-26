import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroImg from "../../assets/parceiros-hero.png";
import sisLogo from "../../assets/logosis-hero.svg";

import cintesp from "../../assets/partners/cintesp.png";
import sislab from "../../assets/partners/sislab.png";
import futel from "../../assets/partners/futel.png";
import finep from "../../assets/partners/finep.png";
import gov from "../../assets/partners/gov.png";
import viver from "../../assets/partners/viver.png";
import ufu from "../../assets/partners/ufu.png";

const partners = [
  { id: 1, logo: cintesp, name: "CINTESP" },
  { id: 2, logo: sislab, name: "SISLAB" },
  { id: 3, logo: futel, name: "FUTEL" },
  { id: 4, logo: finep, name: "FINEP" },
  { id: 5, logo: gov, name: "Governo Federal" },
  { id: 6, logo: viver, name: "Viver" },
  { id: 7, logo: ufu, name: "UFU" },
];

const PartnerCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  img {
    max-width: 100%;
    max-height: 135px;
    object-fit: contain;
    transition: 0.3s ease;
    filter: grayscale(100%);
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

    img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PageWrapper = styled.div`
  background: #f5f5f5;
`;

const Hero = styled.section`
  background: url(${heroImg}) center/cover no-repeat;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
  }

  h1 {
    position: relative;
    z-index: 2;
    font-size: 3rem;
    text-align: center;
  }
`;

const Section = styled.section`
  padding: 80px 0;
`;

const CardBox = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

const GrayPlaceholder = styled.div`
  background: #e0e0e0;
  border-radius: 15px;
  height: 150px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  padding: 12px 35px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(135deg, #0e5c89, #8e1dbd);
  color: white;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const FooterBanner = styled.section`
  background: linear-gradient(135deg, #8e1dbd, #0e5c89);
  padding: 80px 0;
  text-align: center;
  color: white;

  img {
    width: 180px;
    margin-bottom: 20px;
  }
`;

export default function Parthers() {
  return (
    <PageWrapper>
      {/* HERO */}
      <Hero>
        <h1>Parceiros e Mercado</h1>
      </Hero>

      {/* INOVAÇÃO COLABORATIVA */}
      <Section>
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="align-items-center">
              <Col lg={8}>
                <CardBox>
                  <h3>Inovação colaborativa em Tecnologia Assistiva</h3>
                  <p>
                    O SisAssistiva acredita que a inovação em Tecnologia
                    Assistiva se fortalece por meio da colaboração entre
                    pesquisa, mercado e sociedade. Esta página é dedicada à
                    aproximação com empresas, startups, organizações e
                    instituições interessadas em desenvolver soluções conjuntas
                    e ampliar o impacto social das tecnologias assistivas. Aqui,
                    o setor produtivo encontra caminhos claros para se conectar
                    à rede SisAssistiva e participar ativamente do ecossistema
                    de inovação.
                  </p>
                </CardBox>
              </Col>

              <Col lg={4} className="mt-4 mt-lg-0">
                <GrayPlaceholder />
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Section>

      {/* COMO SE CONECTAR */}
      <Section>
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-center mb-4">
              Como se conectar à Rede SisAssistiva
            </h4>
            <p>
              Empresas e organizações podem se aproximar da rede SisAssistiva de
              diferentes formas, incluindo:
            </p>
            <ul>
              <li>Desenvolvimento conjunto de soluções tecnológicas</li>
              <li>Parcerias para pesquisa aplicada e inovação</li>
              <li>
                Apoio à transferência tecnológica e escalonamento de soluções
              </li>
              <li>Cooperação em projetos com impacto social</li>
              <li>
                A rede atua como ponte entre conhecimento científico, demandas
                reais e oportunidades de mercado.
              </li>
            </ul>
          </motion.div>
        </Container>
      </Section>

      {/* GRID DE PARCEIROS */}
      <Section>
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-center mb-5">Construa soluções com impacto</h4>
            <p className="text-center mb-5">
              Se sua empresa, startup ou organização acredita na inovação
              inclusiva e no desenvolvimento de tecnologias com impacto social,
              o SisAssistiva é um espaço aberto à colaboração. Conecte sua
              iniciativa à rede e participe da construção de um ecossistema
              nacional de Tecnologia Assistiva.
            </p>

            <GridWrapper>
              {partners.map((partner, index) => (
                <PartnerCard
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img src={partner.logo} alt={partner.name} />
                </PartnerCard>
              ))}
            </GridWrapper>

            <div className="text-center">
              <Button>Explorar mais parceiros</Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* FOOTER BANNER */}
      <FooterBanner>
        <Container>
          <img src={sisLogo} alt="SisAssistiva" />
          <p>
            Conectando inovação, tecnologia e impacto social em todo o Brasil.
          </p>
        </Container>
      </FooterBanner>
    </PageWrapper>
  );
}
