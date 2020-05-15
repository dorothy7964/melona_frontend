import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.button`
    color: white;
    font-size: 14px;
    font-weight: 600;
    padding: 7px 0px;
    width: 100%;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.lightGreenColor};
    text-align: center;
    cursor: pointer;
    outline: none;
`;

const Button = ({ text, onClick })=> (
    <Container onClick={onClick}>
        {text}
    </Container>
);

Button.propTypes = {
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func
};

export default Button;