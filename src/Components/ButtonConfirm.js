import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  button {
    margin: 0 auto;
    height: 45px;
    font-size: 14pt;
    margin-top: 50px;
  }
`;

const ButtonConfirm = ({ onClick }) => (
  <Wrapper>
    <Button onClick={onClick}>완료 하기</Button>
  </Wrapper>
);

export default ButtonConfirm;
