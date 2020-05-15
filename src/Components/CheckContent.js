import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Switches from "./Switches";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 18px;
`;

const SwitchBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

const Texts = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    ${props => props.theme.whiteBox_bottom};
    margin-top: 14px;
    margin-bottom: 5px;
    span {
        font-size: 13pt !important;
        font-weight: 200 !important;
    }
`;

const CheckContent = ({ 
    contentText,
    switchState,
    handleState = "",
    handleSwitch
}) => {
    return (
        <Wrapper>
            <Texts>
                <span>{contentText}</span>
            </Texts>
            <SwitchBox>
                <Switches 
                    switchState={switchState}
                    handleSwitch={() => handleSwitch(handleState)}   
                />
            </SwitchBox>
        </Wrapper>
    );
}

CheckContent.propTypes = {
    contentText : PropTypes.string.isRequired,
    switchState : PropTypes.bool.isRequired,
    handleState : PropTypes.string,
    handleSwitch : PropTypes.func.isRequired,
};

export default CheckContent;