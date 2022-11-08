import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Products } from "../../pages/Products";
import { NotFoundPage } from "../../pages/NotFoundPage";

import { Container, Header, StyledNavLink } from "./App.styled";

export const App = () => {
  return (
    <Container>
      
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/products">Products</StyledNavLink>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </Container>
  );
};
