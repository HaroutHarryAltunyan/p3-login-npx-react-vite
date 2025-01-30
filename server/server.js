// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const path = require('path');
// const { authMiddleware } = require('./utils/auth');

// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// // Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async () => {
//   await server.start();

//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());

//   app.use('/graphql', expressMiddleware(server, {
//     context: authMiddleware
//   }));

//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/dist')));

//     app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//     });
//   }

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };

// // Call the async function to start the server
//   startApolloServer();


/////////////////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

const startApolloServer = async () => {
  try {
    await server.start();

    // Middleware
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // GraphQL API
    app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));

    // Serve static assets in production
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));
      app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));
    }

    // Start the server after the database is connected
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`🚀 API server running on port ${PORT}!`);
        console.log(`🔗 GraphQL available at http://localhost:${PORT}/graphql`);
      });
    });

  } catch (error) {
    console.error('❌ Error starting Apollo Server:', error);
    process.exit(1); // Exit the process with an error code
  }
};

// Start the Apollo Server
startApolloServer();


