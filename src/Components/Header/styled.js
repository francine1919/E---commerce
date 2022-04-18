import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  
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
export const ContainerHeaderBottom = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f08080;
  height: 48px;
  p {
    color: white;
  }
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
`;

export const ContainerInput = styled.input`
  width: 250px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #ccc;
  background-image: url("https://img.icons8.com/material-outlined/24/000000/search--v1.png");
  background-position: 10px 10px;
  padding: 12px 20px 12px 40px;
  background-repeat: no-repeat;
  font-size: 12px;
  background-color: white;
  transition: width 0.4s ease-in-out;

  :focus {
    width: 200%;
  }
`;
