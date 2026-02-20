import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const SectionWrapper = styled.section`
  background: linear-gradient(135deg, #8e1dbd, #0e5c89);
  padding: 120px 0;
  color: white;
`;

const FormWrapper = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.6);
  padding: 15px 20px;
  border-radius: 40px;
  color: white;
  outline: none;
  transition: 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    border-color: white;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.6);
  padding: 20px;
  border-radius: 25px;
  min-height: 150px;
  resize: none;
  color: white;
  outline: none;
  transition: 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    border-color: white;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Button = styled.button`
  align-self: flex-start;
  padding: 12px 40px;
  border-radius: 30px;
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: white;
    color: #8e1dbd;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-left: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-left: 20px;
  max-width: 450px;
`;

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
    <SectionWrapper>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <FormWrapper
              onSubmit={handleSubmit}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
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
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextArea
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
              />
              <Button type="submit">Enviar</Button>
            </FormWrapper>
          </Col>

          <Col lg={6} className="mt-5 mt-lg-0">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Title>Alguma dúvida</Title>
              <Text>
                A Rede SisAssistiva está preparada para atender sua demanda.
                Preencha o formulário e selecione o canal de contato mais
                adequado.
              </Text>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default ContactSection;
