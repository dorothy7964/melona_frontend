import React from "react";
import styled from "styled-components";
import FatText from "./FatText";
import togeter from "../Icons/togeter_grey.png";

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 0;
    img {
        width: 200px;
    }
    span {
        color: ${props => props.theme.darkGreyColor};
        margin-top: 10px;
        font-size: 18pt;
        font-weight: 100;
    }
    svg {
        color: ${props => props.theme.darkGreyColor};
        font-size: 80px;
    }
`;

export default () => (
    <TextBox>
        <img alt="togeter" src={togeter} />
        <FatText text="게시물을 추가 해주세요." />
    </TextBox>
);