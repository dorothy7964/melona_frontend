import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from 'apollo-link';
import { createHttpLink } from "apollo-link-http";
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import { resolvers } from "./LocalState";

const httpLink = new createHttpLink({
    uri: process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://melona-backend.herokuapp.com/",
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
    uri: process.env.NODE_ENV === "development"
        ? "ws://localhost:4000"
        : "wss://melona-backend.herokuapp.com/",
    options: {
        reconnect: true
    }
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const link = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const cache = new InMemoryCache();
cache.writeData({
    data: {
        isLoggedIn: !!localStorage.getItem('token')
    },
});

export default new ApolloClient({
    link: authLink.concat(link),
    cache,
    resolvers
});