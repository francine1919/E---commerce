import React from "react";
import { ContainerHeaderLogin, LogoHeaderTop } from "./styled";
import sempreFina from "../../Assets/images/sempre-fina.jpg";
import { Link } from "react-router-dom";

export default function HeaderLogin() {
  return (
    <div>
      <ContainerHeaderLogin>
        <Link to="/">
          <LogoHeaderTop
            src={sempreFina}
            alt="Logo sempre fina, font is blue and background is light pink."
          />
        </Link>
      </ContainerHeaderLogin>
    </div>
  );
}

{
  /* <form>
          <ContainerInput placeholder="Pesquisar" type={"text"} />
        </form> */
}
{
  /* <ContainerHeaderTopTitles>
          <Link to="/products" style={config}>
            <p>store</p>
          </Link>
          <Link to="/login" style={config}>
            <p>account</p>
          </Link>
          <Link to="/cart" style={config}>
            <div>
              <p>basket</p>
              <img
                alt="Shopping basket"
                width="20px"
                height="20px"
                src="https://img.icons8.com/doodle/48/000000/shopping-basket-2--v1.png"
              />
            </div>
          </Link>
        </ContainerHeaderTopTitles> */
}
