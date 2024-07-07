import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import ButtonSquare from "./ButtonSquare";

const ButtonText = styled.div`
  @media (max-width: ${(props) => props.theme.maxWidthSmall}) {
    button {
      margin-right: 37px;
    }
  }
  display: flex;
  flex-direction: row;
  button {
    font-size: 13pt;
    font-weight: 600;
    color: ${(props) => props.theme.lightGreenColor};
  }
`;

const TextBox = styled.div`
  @media (max-width: ${(props) => props.theme.maxWidthMiddle}) {
    position: absolute;
    span {
      top: 47px;
      right: 186px;
      width: 230px;
    }
  }
  @media (max-width: ${(props) => props.theme.maxWidthSmall}) {
    position: absolute;
    span {
      top: 47px;
      right: 149px;
      width: 230px;
    }
  }
  span {
    position: absolute;
    font-weight: 100;
    margin-top: 20px;
    color: ${(props) => props.theme.redColor};
  }
`;

export default withRouter(({ history, params, route }) => {
  const [action, setAction] = useState(true);
  const handleAddress = (e) => {
    e.preventDefault();
    setAction(false);
    if (params === "") {
      setAction(true);
    }
    if (params !== "undefined") {
      history.push(`/${route}/${params}`);
    } else {
      setAction(true);
    }
  };

  return (
    <ButtonText>
      <ButtonSquare onClick={handleAddress} type="text" text="확인" />
      <TextBox>
        {action && <span>지역 선택 후 확인 버튼 클릭 하세요.</span>}
      </TextBox>
    </ButtonText>
  );
});
