import {
  Navbar as BSNavbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import sisLogo from "../../assets/sislogo.svg";

const StyledNavLink = styled(NavLink)`
  color: #0082d3;
  text-decoration: none;
  margin-left: 20px;
  font-weight: 500;
  transition: 0.3s ease;
  font-size: 18px;

  &:hover {
    color: #00588f;
  }

  &.active {
    border-bottom: 2px solid #0082d3;
  }
`;

const StyledDropdown = styled(NavDropdown)`
  margin-left: 20px;
  font-weight: 500;

  .dropdown-toggle {
    color: #0082d3 !important;
    font-size: 18px;
  }

  .dropdown-menu {
    border-radius: 12px;
    padding: 10px 0;
  }

  .dropdown-item {
    font-size: 16px;
    padding: 10px 20px;
    transition: 0.2s ease;

    &:hover {
      background: #f0f7ff;
      color: #00588f;
    }
  }
`;

const Logo = styled.img`
  width: 237px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  return (
    <BSNavbar bg="white" expand="lg" fixed="top">
      <Container>
        <BSNavbar.Brand as={NavLink} to="/">
          <Logo src={sisLogo} alt="SisAssistiva Logo" />
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <StyledNavLink to="/">Home</StyledNavLink>

            <StyledDropdown title="Soluções" id="solucoes-dropdown">
              <NavDropdown.Item as={NavLink} to="/projetos-destaque">
                Produtos Destaque
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/mapa-interativo">
                Mapa Interativo
              </NavDropdown.Item>
            </StyledDropdown>

            <StyledDropdown title="Mercado" id="mercado-dropdown">
              <NavDropdown.Item as={NavLink} to="/vitrine">
                Vitrine
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/parceiros">
                Parceiros
              </NavDropdown.Item>
            </StyledDropdown>

            <StyledNavLink to="/contato">Contato</StyledNavLink>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
