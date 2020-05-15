import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Shadow = styled.div`
    ${props => props.theme.shadowBox}
    background-color: ${props => props.color};
`;

const Box = styled(Shadow)`
    padding: 20px;
    text-align: center;
    width: 100%;
    font-weight: 600;
    cursor: pointer;
`;

const ShadowBox = ({ text, color="white", onClick })=> (
    <Box onClick={onClick} color={color}>
        {text}
    </Box>
);

ShadowBox.propTypes = {
    text : PropTypes.string.isRequired,
    color : PropTypes.string,
    onClick : PropTypes.func
};

export default ShadowBox;