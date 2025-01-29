import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Define the server URI using Vite's environment variable system
const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URI || "http://localhost:3000/graphql",
    fetch: fetch, // Explicitly define fetch for better compatibility
});

// Add authentication token to headers
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token") || ""; // Handle null token safely
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

// Create Apollo Client instance
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;