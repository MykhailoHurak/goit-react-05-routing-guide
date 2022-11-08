import { Outlet } from "react-router-dom";
import { Container, Header, Logo, NavLinkStyled } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">💻</span>{" "} MARKETPLACE
        </Logo>
        <nav>
          <NavLinkStyled to="/" end>Home</NavLinkStyled>
          <NavLinkStyled to="/about">About</NavLinkStyled>
          <NavLinkStyled to="/products">Products</NavLinkStyled>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
