import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FatText from "./FatText";
import ReplayLink from "./ReplayLink";
import { Back }  from "./Icons";

const NoneData = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    justify-content: center;
`;

const IconBox = styled(Link)`
    cursor: pointer;
    margin-left: 5px;
    margin-top: 20px;
    svg {
        color: ${props => props.theme.darkGreyColor};
        font-size: 4.5rem;
    }
`;

const ButtonContainer = styled.button`
    display: flex;
    margin: 0 auto;
    margin-bottom: 30px;
    border: 0;
    background-color: inherit;
    outline: none;
    cursor: pointer;
    svg {
        color: ${props => props.theme.darkGreyColor};
        font-size: 35pt;
    }
`;

const BackRoute = ({ 
    type = "noneText",
    route,
    onClick
}) => {
    const [action] = useState(type);

    if (action === "noneText"){
        return (
            <NoneData>
                <FatText text={"검색 결과가 없습니다."} />
                <IconBox to={`/${route}`}>
                    <Back />
                </IconBox>
            </NoneData>
        );
    } else if (action === "icon") {
        return (
            <ReplayLink  
                link={`/${route}`}
            />
        );
    } else if (action === "button"){
        return (
            <ButtonContainer onClick={onClick}>
                <Back />
            </ButtonContainer>
        )
    }
};

BackRoute.propTypes = {
    type : PropTypes.string,
    route : PropTypes.string,
    onClick : PropTypes.func,
};

export default BackRoute;