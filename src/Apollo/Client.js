import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { resolvers } from "./LocalState";

const httpLink = new createHttpLink({
    uri: process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://melona-backend.herokuapp.com/",
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

const cache = new InMemoryCache();
cache.writeData({
    data: {
        isLoggedIn: !!localStorage.getItem('token')
    },
});

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    resolvers
});