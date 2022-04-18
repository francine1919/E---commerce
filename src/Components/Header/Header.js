import React from "react";
import { Link } from "react-router-dom";
import {
  ContainerHeader,
  ContainerHeaderBottom,
  ContainerHeaderTop,
  ContainerHeaderTopTitles,
  ContainerInput,
  Teste,
} from "./styled";
const config = { textDecoration: "none" };
export default function Header() {
  return (
    <ContainerHeader>
      <ContainerHeaderTop>
        <p>Sempre Fina</p>
        <form>
          <ContainerInput placeholder="Pesquisar" type={"text"} />
        </form>
        <ContainerHeaderTopTitles>
          <Link to="/products" style={config}>
            <p>store</p>
          </Link>
          <Link to="/login" style={config}>
            <Teste>account</Teste>
          </Link>
          <div>
            <Link to="/cart" style={config}>
              <p>basket</p>
            </Link>
            <img
              width="20px"
              height="20px"
              src="https://img.icons8.com/doodle/48/000000/shopping-basket-2--v1.png"
            />
          </div>
        </ContainerHeaderTopTitles>
      </ContainerHeaderTop>

      <ContainerHeaderBottom>
        <p>Men's clothing</p>
        <p>Jewelery</p>
        <p>Women's clothing</p>
      </ContainerHeaderBottom>
    </ContainerHeader>
  );
}
