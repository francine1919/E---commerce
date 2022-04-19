import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 64px;
  position: sticky;
  top: 0;
`;
export const ContainerHeaderLogin = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;
export const ContainerHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  height: 64px;

  p {
    color: #686f7b;
    margin: 0 10px;
  }
`;
export const LogoHeaderTop = styled.img`
  border-radius: 20%;
  width: 64%;
  margin: 14px;
`;
export const ContainerHeaderTopTitles = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;

  div {
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
  p {
    margin: 0 4px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

export const ContainerInput = styled.input`
  width: 300px;
  box-sizing: border-box;
  border-radius: 4px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #f08080;
  background-image: url("https://img.icons8.com/dusk/64/000000/search--v1.png");
  background-size: 24px;
  background-position: 10px 10px;
  padding: 12px 20px 12px 40px;
  background-repeat: no-repeat;
  font-size: 13px;
  background-color: white;
  transition: width 0.4s ease-in-out;

  :focus {
    width: 200%;
  }
`;
export const ContainerHeaderBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f08080;
  height: 48px;
  

  p {
    color: white;
  }
`;
