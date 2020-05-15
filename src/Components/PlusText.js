import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FatText from "./FatText";
import { Plus } from "./Icons";
 
const PlusBox = styled.div`
    display: flex;
    flex-direction: row;
    svg {
        margin-top: 2x;
        color: ${props => props.theme.blackColor};
    }
`;

const PlusText =  ({ 
    text,
}) => (
    <PlusBox>
        <Plus />
        <FatText text={text} />
    </PlusBox>
);

PlusText.propTypes = {
    text : PropTypes.string.isRequired,
};

export default PlusText;