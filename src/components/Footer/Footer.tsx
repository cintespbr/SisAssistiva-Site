import { NavLink } from "react-router-dom";
import sisLogo from "../../assets/sislogohorizontal.svg";
import {
  Copyright,
  FooterContent,
  FooterWrapper,
  Logo,
  NavLinks,
  SocialLinks,
} from "./Footer.styles";

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
