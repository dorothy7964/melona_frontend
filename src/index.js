import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import App from './Components/App';
import Client from "./Apollo/Client";  

ReactDOM.render(
    <ApolloProvider client={Client}>
        <ApolloHooksProvider client={Client}>
            <App />
        </ApolloHooksProvider>
    </ApolloProvider>,
    document.getElementById("root")
);