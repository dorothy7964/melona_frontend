import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Footer from "./Footer";
import Header from "./Header";

const QUERY = gql`
    {
        isLoggedIn @client(always: true)
    }
`;

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidthLarge};
    width: 100%;
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
                    <React.Fragment>
                        {isLoggedIn && <Header />}
                        <Wrapper>
                            <Routes isLoggedIn={isLoggedIn} />
                            <Footer />
                        </Wrapper>
                    </React.Fragment>
                </Router>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
            </React.Fragment>
        </ThemeProvider>
    );
};