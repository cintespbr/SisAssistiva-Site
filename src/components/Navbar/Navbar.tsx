import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import sisLogo from "../../assets/sislogo.svg";

const StyledNavLink = styled(NavLink)`
  color: #0082d3;
  text-decoration: none;
  margin-left: 20px;
  font-weight: 500;
  transition: 0.3s ease;
  border-bottom: 2px solid #0082d3;
  font-size: 20px;

  &:hover {
    color: #00588f;
  }

  &.active {
    color: #0082d3;
    border-bottom: 2px solid #0082d3;
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
    <BSNavbar bg="white" variant="dark" expand="lg" fixed="top">
      <Container>
        <BSNavbar.Brand as={NavLink} to="/">
          <Logo src={sisLogo} alt="SisAssistiva Logo" />
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/solucoes">Soluções</StyledNavLink>
              <StyledNavLink to="/mercado">Mercado</StyledNavLink>
              <StyledNavLink to="/inovacao">Inovação</StyledNavLink>
            </div>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
