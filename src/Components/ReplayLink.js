import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from  "react-router-dom";
import { Back } from "./Icons";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    svg {
        color: ${props => props.theme.darkGreyColor};
        font-size: 35pt;
    }
`;

const ReplayLink = ({ link })=> (
    <Container>
        <Link to={link}>
            <Back />
        </Link>
    </Container>
);

ReplayLink.propTypes = {
    link : PropTypes.string.isRequired,
};

export default ReplayLink;