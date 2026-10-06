import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  PageWrapper,
  Hero,
  Section,
  Grid,
  Card,
  CardImage,
  CardContent,
  Badge,
} from "./NoticiasEventos.styles";
/* =============================
   MOCK DE DADOS (depois vira API)
============================= */
import noticia1 from "../../assets/news/noticia1.jpg";
import noticia2 from "../../assets/news/noticia2.png";
import noticia3 from "../../assets/news/noticia3.jfif";
import noticia4 from "../../assets/news/noticia4.jfif";

/* =============================
   COMPONENTE
============================= */

export default function NoticiasEventos() {
  const [filter] = useState("all");

  const data = [
    {
      id: 2,
      type: "noticia",
      title:
        "Começa o Sisconec.TA 2026 evento Nacional de Inovação Tecnológica Assistiva",
      description:
        "Teve início nesta sexta -feira, (20/3), na Arena Sabiazinho,  o Sisconec.TA 2026, A proposta do evento é promover a transferência de tecnologias desenvolvidas nas universidades, focadas na autonomia de pess...",
      image: noticia1,
      link: "https://comunica.ufu.br/ufu-em-imagens/2026/03/comeca-o-sisconecta-2026-evento-nacional-de-inovacao-tecnologica-assistiva",
    },
    {
      id: 3,
      type: "noticia",
      title: "Uberlândia sedia maior evento de tecnologia assistiva do país",
      description:
        "Encontro reúne startups, pesquisadores e especialistas para apresentar soluções inovadoras voltadas à inclusão de pessoas com deficiência e acessibilidade.",
      image: noticia3,
      link: "https://g1.globo.com/mg/triangulo-mineiro/videos-integracao-noticia-triangulo-mineiro/video/uberlandia-sedia-maior-evento-de-tecnologia-assistiva-do-pais-14449274.ghtml",
    },
    {
      id: 4,
      type: "noticia",
      title:
        "UFU lidera evento nacional em Uberlândia para conectar inovações em Tecnologia Assistiva à indústria",
      description:
        "Focado na autonomia de pessoas com deficiência, evento gratuito na Arena Sabiazinho reúne 26 laboratórios para debater transferência tecnológica e sela a criação da Praça da Ciência e do Polo de Manufatura Aditiva em TA",
      image: noticia2,
      link: "https://comunica.ufu.br/noticias/2026/03/ufu-lidera-evento-nacional-em-uberlandia-para-conectar-inovacoes-em-tecnologia",
    },
    {
      id: 5,
      type: "noticia",
      title:
        "Uberlândia sedia evento nacional de tecnologia assistiva e inovação",
      description:
        "Arena Sabiazinho recebe encontro com foco em inclusão, reunindo soluções para pessoas com deficiência e programação do Startup Day 2026, com debates sobre inteligência artificial, empreendedorismo e investimentos.",
      image: noticia4,
      link: "https://g1.globo.com/mg/triangulo-mineiro/mg1-uberlandia/video/uberlandia-sedia-evento-nacional-de-tecnologia-assistiva-e-inovacao-14453288.ghtml",
    },
  ];

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.type === filter);

  return (
    <PageWrapper>
      {/* HERO */}
      <Hero>
        <h1>Notícias da Rede SisAssistiva</h1>

        <p>
          Fique por dentro das principais iniciativas, avanços tecnológicos e
          ações que estão transformando o cenário da tecnologia assistiva no
          Brasil.
        </p>

        <p>
          Acompanhe eventos, lançamentos, projetos em destaque e notícias
          relevantes que conectam pesquisa, inovação e impacto social em todo o
          país.
        </p>
      </Hero>

      {/* CONTEÚDO */}
      <Section>
        <Container>
          {/* GRID */}
          <Grid>
            {filteredData.map((item, index) => (
              <Card
                as="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardImage src={item.image} />

                <CardContent>
                  <Badge type={item.type}>
                    {item.type === "evento" ? "Evento" : "Notícia"}
                  </Badge>

                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </PageWrapper>
  );
}
