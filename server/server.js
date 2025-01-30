const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
  startApolloServer();





/////////////////////////////// new server with mongodb



// require('dotenv').config(); // Load environment variables
// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const path = require('path');
// const cors = require('cors'); // Enable CORS for security
// const { authMiddleware } = require('./utils/auth');
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection'); // MongoDB Connection

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Apollo Server Setup
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const startServer = async () => {
//   try {
//     await server.start();

//     // Middleware
//     app.use(cors()); // Allow cross-origin requests
//     app.use(express.urlencoded({ extended: false }));
//     app.use(express.json());

//     // GraphQL API Endpoint
//     app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));

//     // Serve static assets in production
//     if (process.env.NODE_ENV === 'production') {
//       app.use(express.static(path.join(__dirname, '../client/dist')));
//       app.get('*', (req, res) =>
//         res.sendFile(path.join(__dirname, '../client/dist/index.html'))
//       );
//     }

//     // Ensure MongoDB Connection Before Starting Server
//     db.once('open', () => {
//       console.log('✅ Connected to MongoDB!');
//       app.listen(PORT, () => {
//         console.log(`🚀 API server running on port ${PORT}!`);
//         console.log(`🔗 GraphQL available at http://localhost:${PORT}/graphql`);
//       });
//     });

//     // Handle MongoDB Connection Errors
//     db.on('error', (err) => {
//       console.error('❌ MongoDB connection error:', err);
//       process.exit(1); // Exit process if MongoDB fails
//     });

//   } catch (error) {
//     console.error('❌ Error starting Apollo Server:', error);
//     process.exit(1); // Exit if Apollo fails
//   }
// };

// // Handle Uncaught Exceptions & Unhandled Promise Rejections
// process.on('uncaughtException', (err) => {
//   console.error('🔥 Uncaught Exception:', err);
//   process.exit(1);
// });

// process.on('unhandledRejection', (reason, promise) => {
//   console.error('⚠️ Unhandled Promise Rejection:', reason);
// });

// // Start the Apollo Server
// startServer();



