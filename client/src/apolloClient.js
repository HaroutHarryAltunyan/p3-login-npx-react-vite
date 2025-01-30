import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// ✅ Define the GraphQL URI from environment variables (Render or Local)
const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URI || "http://localhost:10000/graphql", // Use Render URL in production
});

// ✅ Add authentication token to headers
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "", // Standard Bearer Token Authentication
        },
    };
});

// ✅ Create Apollo Client instance (Fixed)
const client = new ApolloClient({
    link: authLink.concat(httpLink), // Correctly chaining links
    cache: new InMemoryCache(), // Enable caching for Apollo Client
});

export default client;























// import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// // Define the server URI using Vite's environment variable system



// // //this is when on local machine host
// // const httpLink = createHttpLink({
// //     uri: import.meta.env.VITE_GRAPHQL_URI || "http://localhost:3000/graphql", // Use Vite env variables
// // });

// //this is when on render deploy
// const client = new ApolloClient({
//     link: new createHttpLinkHttpLink({
//         uri: import.meta.env.VITE_GRAPHQL_URI || "http://localhost:10000/graphql",
//     }),
//     cache: new InMemoryCache(),
// });



// // Add authentication token to headers
// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem("token");
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : "", // Include 'Bearer' prefix for standard practice
//         },
//     };
// });

// // Create Apollo Client instance
// const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(), // Configure cache options here if needed
// });

// export default client;
