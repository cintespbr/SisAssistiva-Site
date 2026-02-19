import styled from "styled-components";
import { Container } from "react-bootstrap";

const HeroWrapper = styled.section`
  background: #858585;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <Container>{/* Hero vazia por enquanto */}</Container>
    </HeroWrapper>
  );
};

export default HeroSection;
