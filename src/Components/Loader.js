import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import melonaColor from "../Icons/melona_color.png";

const Animation = keyframes`
    0% { opacity: 0 }
    50% { opacity: 1 }
    100% { opacity: 0 }
`;

const Loader = styled.div`
    animation: ${Animation} 1s linear infinite;
    width: 100%;
    text-align: center;
    img {
        width: 50px;
    }
`;

const LoaderSmall = styled.div`
    animation: ${Animation} 1s linear infinite;
    width: 100%;
    text-align: center;
    img {
        width: 20px;
    }
`;

export default ({ type = "default" }) => {
    const [action] = useState(type);

    if (action === "default"){
        return (
            <Loader>
                <img alt="loading" src={melonaColor} />
            </Loader>
        );
    } else if (action === "small") {
        return (
            <LoaderSmall>
                <img alt="loading" src={melonaColor} />
            </LoaderSmall>
        );
    }
};
