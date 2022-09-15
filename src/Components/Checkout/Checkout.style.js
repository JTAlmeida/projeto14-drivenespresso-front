import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 20px;
  align-items: center;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  height: 68vh;
  width: 96vw;
  margin-top: 16vh;
  margin-bottom: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  overflow: auto;

`;

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  min-height: 20%;
  width: 90%;
  background-color: #fafafa;

  img {
    max-width: 80%;
    max-height: 80%;
    min-width: 10%;
    min-height: 10%;
  }

  h1 {
    font-size: clamp(10px, 18px, 18px);
    font-weight: 700;
    padding: 0 5px;
  }

  h2 {
    color: #6f6f70;
    font-size: clamp(10px, 15px, 15px);
    font-weight: 400;
    padding-right: 10px;
  }

  h3 {
    color: #3d8705;
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  min-width: 10%;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  padding-left: 6px;
  text-align: center;
  border-radius: 5px;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-weight: 400;
  margin: 5px;
  background-color: #fff8e7;

  &::placeholder {
    color: #6f6f70;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const Footer = styled.div`
  height: 10vh;
  width: 96vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  position: fixed;
  bottom: 1vh;
  left: 2vw;
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 30px;
min-width: 30%;
background-color: #988c51;
border-radius: 5px;
color: #fafafa;
font-size: 20px;
font-weight: 700;
cursor: pointer;
`