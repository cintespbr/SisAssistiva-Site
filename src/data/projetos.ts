import bioprot from "../assets/showcase/imagem_bioprot.png";
import ufcgcert from "../assets/showcase/imagem_ufcgcert.png";
import dreanns from "../assets/showcase/imagem_dreanns.jpg";
import tecnoaging from "../assets/showcase/imagem_tecnoaging.png";
import fabict_cer from "../assets/showcase/imagem_fabict_cer.png";
import amputsus from "../assets/showcase/imagem_amputsus.jpg";

export interface Projeto {
  id: number;
  titulo: string;
  imagem: string;
  instituicao: string;
  coordenacao: string;
  resumo: string;
}

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo:
      "Desenvolvimento de sistemas para melhoria da usabilidade e incorporação de próteses de membro superior",
    imagem: bioprot,
    instituicao: "Universidade Federal de Minas Gerais",
    coordenacao: "Claysson Bruno Santos Vimieiro",
    resumo:
      "Este projeto se aplica na área de próteses de membros superiores com intuito de desenvolver tecnologias que reduzam as taxas de rejeição da prótese pelo usuário ao longo de sua vida. O objetivo é consolidar uma rede de laboratórios de pesquisa com grande experiência em Tecnologias Assistivas, propondo novos sistemas para melhoria da usabilidade e incorporação de próteses de membro superior.",
  },
  {
    id: 2,
    titulo:
      "Psilocibina para auxiliar no desenvolvimento de pessoas com transtorno do espectro autista (TEA)",
    imagem: ufcgcert,
    instituicao: "Universidade Federal de Campina Grande",
    coordenacao: "Marcus Vinícius Lia Fook",
    resumo:
      "O objetivo deste projeto é desenvolver remédios com psilocibina visando auxiliar no desenvolvimento cognitivo, socioemocional e socioeconômico de pessoas com deficiência intelectual, mental, autismo e múltipla.",
  },
  {
    id: 3,
    titulo:
      "Dispositivos de reabilitação e assistência em neurociência e neurotecnologias",
    imagem: dreanns,
    instituicao: "Universidade Estadual de Campinas",
    coordenacao: "Coordenação não informada",
    resumo:
      "Este projeto busca desenvolver tecnologias assistivas e de reabilitação voltadas a pessoas com deficiências motoras e cognitivas, com foco em pacientes de AVC.",
  },
  {
    id: 4,
    titulo:
      "Tecnologia assistiva na avaliação clínico-funcional integrada e prescrição de exercícios para idosos",
    imagem: tecnoaging,
    instituicao: "Universidade Federal do Paraná",
    coordenacao: "Coordenação não informada",
    resumo:
      "O projeto busca diagnosticar e intervir sobre fatores como fragilidade, fadiga, aspectos cognitivos e risco de queda em idosos utilizando sensores e inteligência artificial.",
  },
  {
    id: 5,
    titulo:
      "Automação na fabricação de órteses e próteses personalizadas para redução de custo e tempo",
    imagem: fabict_cer,
    instituicao: "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
    coordenacao: "Libardo Andrés González Torres",
    resumo:
      "A proposta é automatizar processos de fabricação de órteses e próteses personalizadas utilizando CAD, CAM e impressão 3D.",
  },
  {
    id: 6,
    titulo:
      "Recurso tecnológico inovador para soluções protéticas em amputados de membros inferiores usuários do SUS",
    imagem: amputsus,
    instituicao: "Universidade do Estado de Santa Catarina",
    coordenacao: "Coordenação não informada",
    resumo:
      "O projeto busca desenvolver soluções inovadoras em protetização para melhorar a adesão ao uso de próteses e modernizar o processo de prescrição no SUS.",
  },
];
