import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { useState } from "react";
import sisLogo from "../../assets/logosis-hero.svg";
import backgroundImg from "../../assets/contato-bg.png"; // coloque sua imagem aqui

const PageWrapper = styled.section`
  min-height: 100vh;
  background: url(${backgroundImg}) center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  padding: 120px 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0 auto 50px auto;
  line-height: 1.7;
  font-size: 1.1rem;
`;

const FormWrapper = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px 25px;
  border-radius: 40px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.15);
  color: white;
  backdrop-filter: blur(10px);
  outline: none;
  transition: 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    border-color: white;
    background: rgba(255, 255, 255, 0.25);
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.15);
  color: white;
  backdrop-filter: blur(10px);
  resize: none;
  min-height: 140px;
  outline: none;
  transition: 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    border-color: white;
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Button = styled.button`
  width: 180px;
  padding: 12px;
  border-radius: 30px;
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  margin-top: 10px;
  transition: 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

const Logo = styled.img`
  margin-top: 50px;
  width: 220px;
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <PageWrapper>
      <Overlay />
      <Container>
        <Content>
          <Title>Envie sua Demanda em Tecnologia Assistiva</Title>

          <Description>
            O SisAssistiva disponibiliza um canal dedicado para o registro de
            demandas relacionadas à Tecnologia Assistiva. Este espaço foi criado
            para acolher desafios, necessidades, propostas e sugestões.
          </Description>

          <FormWrapper
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
            <TextArea
              name="assunto"
              placeholder="Assunto"
              value={formData.assunto}
              onChange={handleChange}
            />
            <Button type="submit">Enviar</Button>
          </FormWrapper>

          <Logo src={sisLogo} alt="SisAssistiva Logo" />
        </Content>
      </Container>
    </PageWrapper>
  );
}
