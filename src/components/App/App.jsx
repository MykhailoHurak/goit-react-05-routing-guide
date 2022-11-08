import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Products } from "../../pages/Products";
import { Product } from "../../pages/Product";

import { Mission } from "../AboutMore/Mission";
import { Reviews } from "../AboutMore/Reviews";
import { Team } from "../AboutMore/Team";

import { NotFoundPage } from "../../pages/NotFoundPage";

// import { Container, Header, Logo, StyledNavLink } from "./App.styled";
import { SharedLayout } from "../SharedLayout/SharesLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="mission" element={<Mission />} />
        <Route path="reviews" element={ <Reviews /> } />
        <Route path="team" element={ <Team /> } />
      </Route>

      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>

    // <Container>

    //   <Header>
    //     <Logo>
    //       <span role="img" aria-label="computer icon">💻</span>{" "}
    //       MARKETPLACE
    //     </Logo>

    //     <nav>
    //       <StyledNavLink to="/">Home</StyledNavLink>
    //       <StyledNavLink to="/about">About</StyledNavLink>
    //       <StyledNavLink to="/products">Products</StyledNavLink>
    //     </nav>
    //   </Header>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />}>
    //       <Route path="mission" element={ <Mission /> } />
    //       <Route path="reviews" element={ <Reviews /> } />
    //       <Route path="team" element={ <Team /> } />
    //     </Route>

    //     <Route path="/products" element={<Products />} />
    //     <Route path="/products/:id" element={<Product />} />
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Routes>

    // </Container>
  );
};
