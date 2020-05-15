import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FatText from "./FatText";

const Container = styled.div`
    display: flex;
    font-size: 13pt;
    height: 50px;
`;

const TextBox = styled.div`
    background-color: ${props => props.theme.lightGreyColor};
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Section = styled.div`
    ${props => props.theme.shadowBox}
    width: 100% !important;
    display: flex;
    background-color: white;
    padding: 0 16px;
    align-items: center;
    span {
        padding: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const BorderUserCard = ({
    userName,
}) => (
    <Container>
        <TextBox>
            <span>신청자</span>
        </TextBox>
        <Section>
            <FatText text={userName} />
        </Section>
    </Container>
);

BorderUserCard.propTypes = {
    userName : PropTypes.string.isRequired,
};

export default BorderUserCard;