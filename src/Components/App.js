import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "styled-components";
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from "../Styles/Theme";
import Routes from "./Routes";

const QUERY = gql`
    {
        isLoggedIn @client(always: true)
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
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
            </React.Fragment>
        </ThemeProvider>
    );
};