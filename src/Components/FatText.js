import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span`
    font-weight: 600;
    color: ${props => props.color};
`;

const FatText = ({ text, color="black" }) => (
    <Text color={color}>
        {text}
    </Text>
);

FatText.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
};

export default FatText;