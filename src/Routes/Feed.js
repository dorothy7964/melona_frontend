import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import RouteTab from "../Components/RouteTab"
import togeter from "../Icons/togeter.png"

const Wrapper = styled.div`
    min-height: ${props => props.theme.minHeight};
    margin-top: 20px;
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
    img {
        width: 50%;
    }
`;

export default() => {
    useEffect(() => {
        window.location.reload();
    }, []);

    return (
        <Wrapper>
            <Helmet>
                <title>Melona</title>
            </Helmet>
            <RouteTab />
            <ImgBox>
                <img alt="daddyTab" src={togeter} />
            </ImgBox>
            <Redirect to="/daddy" />
        </Wrapper>
    );
};