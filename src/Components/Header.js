import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import font_logo from "../Icons/font_logo.png";
import buy from "../Icons/buy.png";
import apply from "../Icons/apply.png";
import profile from "../Icons/profile.png";
import { ME } from "../SharedQueries";

const Header = styled.header`
    @media (max-width: ${props => props.theme.maxWidthLarge}){
        padding: 20px !important;
    }
    width: 100%;
    border: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    box-shodow: ${props => props.theme.shadowBox_bottom};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
    z-index: 2;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidthLarge};
    display: flex;
    justify-content: center;
`;

const HeaderColumn = styled.div`
    @media (max-width: ${props => props.theme.maxWidthMiddle}){
        width: 50%;
    }
    width: 33%;
    text-align: center;
    &:first-child {
        margin-right: auto;
        text-align: left;
    }
    &:last-child {
        margin-left: auto;
        text-align: right;
    }

`;

const HeaderLink = styled(Link)`
    &:not(:last-child) {
        margin-right: 20px;
    }
    img {
        width: 62px;
    }
`;

const FontLogoLink = styled(Link)`
    @media (max-width: ${props => props.theme.maxWidthMiddle}){
        img {
            width: 165px !important;
        }
    }
    img {
        width: 185px;
        margin-top: 15px;
    }
`;

export default (() => {
    const { data } = useQuery(ME);
    
    return(
        <Header>
            <HeaderWrapper>
                <HeaderColumn>
                    <FontLogoLink to="/daddy">
                        <img alt="font_logo" src={font_logo} />
                    </FontLogoLink>
                </HeaderColumn>
                <HeaderColumn>
                    <HeaderLink to="/buy">
                        <img alt="buy" src={buy} />
                    </HeaderLink>
                    <HeaderLink to="/apply">
                        <img alt="apply" src={apply} />
                    </HeaderLink>
                    {!(data && data.me)? (
                        <HeaderLink to="/#">
                            <img alt="profile" src={profile} />
                        </HeaderLink>
                    ) : (
                        <HeaderLink to={`/${data.me.userName}`}>
                            <img alt="profile" src={profile} />
                        </HeaderLink>
                    )} 
                </HeaderColumn>
            </HeaderWrapper>
        </Header>
    );
});