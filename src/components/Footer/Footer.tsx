import styled from "styled-components";
import { NavLink } from "react-router-dom";
/*import footerBg from "../../assets/rodape.png";*/
import sisLogo from "../../assets/sislogohorizontal.svg";

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 60px;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #f3f6fb 100%);
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  width: 100%;
`;

const Logo = styled.img`
  width: 220px;
  margin-bottom: 30px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: 0.3s ease;

    &:hover {
      color: #0082d3;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: 0.3s ease;

    &:hover {
      color: #0082d3;
    }
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #777;
`;

const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 360px;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Logo src={sisLogo} alt="SisAssistiva Logo" />

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/mapa">Mapa Interativo</NavLink>
          <NavLink to="/vitrine">Vitrine</NavLink>
          <NavLink to="/parceiros">Parceiros</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </NavLinks>

        <SocialLinks>
          <a
            href="https://www.instagram.com/sisassistiva_mcti/"
            target="_blank"
          >
            Instagram
          </a>
          <a href="mailto: sislab.integrador@femec.ufu.br">E-mail</a>
        </SocialLinks>

        <Copyright>© {new Date().getFullYear()} SisAssistiva</Copyright>
      </FooterContent>
    </FooterWrapper>
  );
}
