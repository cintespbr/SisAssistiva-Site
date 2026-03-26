import styled from "styled-components";
import { motion } from "framer-motion";

/* =============================
   ESTILOS
============================= */

export const PageWrapper = styled.div`
  background: #f7f9fc;
`;

export const Hero = styled.section`
  background: linear-gradient(135deg, #0082d3, #6a11cb);
  color: white;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 12px;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const Section = styled.section`
  padding: 80px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;

  h4 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

export const Badge = styled.span<{ type: string }>`
  display: inline-block;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.75rem;

  background: ${({ type }) => (type === "evento" ? "#ffe0b2" : "#d1ecf1")};

  color: ${({ type }) => (type === "evento" ? "#e65100" : "#0c5460")};
`;
