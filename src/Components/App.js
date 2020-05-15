import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from "../Styles/Theme";
import Routes from "./Routes";

const QUERY = gql`
    {
        isLoggedIn @client(always: false)
    }
`;

export default () => {
    const {
        data: { isLoggedIn }
    } = useQuery(QUERY);

	return (
        <ThemeProvider theme={Theme}>
            <React.Fragment>
                <GlobalStyles />
                <Router>
                    <Routes isLoggedIn={isLoggedIn} />
                </Router>
            </React.Fragment>
        </ThemeProvider>
    );
};