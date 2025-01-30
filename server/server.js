import dotenv from 'dotenv';
dotenv.config(); // ✅ Load .env variables once at the very top

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';

const app = express();
// const PORT = process.env.PORT || 3000;  // on local machine
const PORT = process.env.PORT || 10000;   // on render 

// ✅ Ensure MongoDB URI is provided
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('❌ Missing MONGODB_URI in .env file');
  process.exit(1);
}

console.log("🔍 Connecting to MongoDB:", MONGODB_URI);

// ✅ Connect to MongoDB using Mongoose
mongoose.connect(MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  tls: true, // ✅ Force TLS for MongoDB Atlas
})
  .then(() => console.log("✅ Successfully connected to MongoDB"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// ✅ Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

const startApolloServer = async () => {
  try {
    await server.start();

    // ✅ Add Middleware
    app.use(cors()); // Enable CORS for frontend communication
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // ✅ Apollo Middleware
    app.use('/graphql', expressMiddleware(server));

    // ✅ Start Express Server on the Correct Host
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
    });

  } catch (error) {
    console.error("❌ Error starting Apollo Server:", error);
  }
};

// ✅ Start the Server
startApolloServer();




























































































































// import dotenv from 'dotenv';
// dotenv.config(); 
// import express from 'express';
// import cors from 'cors';
// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import db from './config/connection.js';
// import typeDefs from './graphql/typeDefs.js';
// import resolvers from './graphql/resolvers/index.js';

// dotenv.config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 3000;

// // ✅ Use .env for MongoDB URI

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/proj3';

// // "mongodb+srv://haroutyunhaltunyan93:TOxbTgT3kG8fXtnS@loginproject3.puzfb.mongodb.net/?retryWrites=true&w=majority&appName=loginproject3";


// // const MONGODB = "mongodb+srv://haroutyunhaltunyan93:TOxbTgT3kG8fXtnS@loginproject3.puzfb.mongodb.net/?retryWrites=true&w=majority&appName=loginproject3";



// // ✅ Ensure MongoDB URI is provided
// if (!MONGODB_URI) {
//   console.error('❌ Missing MONGODB_URI in .env file');
//   process.exit(1);
// }

// // ✅ Create a new Apollo Server instance
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req }), // Pass request to context if needed
// });

// const startApolloServer = async () => {
//   try {
//     await server.start();

//     // ✅ Add Middleware
//     app.use(cors()); // Allow cross-origin requests
//     app.use(express.urlencoded({ extended: false }));
//     app.use(express.json());

//     // ✅ Apollo Middleware
//     app.use('/graphql', expressMiddleware(server));

//     // ✅ Confirm MongoDB Connection
//     db.once('open', () => {
//       console.log('✅ MongoDB Connected');

//       // Start Express Server
//       app.listen(PORT, () => {
//         console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
//       });
//     });

//     // ✅ Handle MongoDB connection errors
//     db.on('error', (err) => {
//       console.error('❌ MongoDB connection error:', err);
//     });

//   } catch (error) {
//     console.error('❌ Error starting Apollo Server:', error);
//   }
// };

// // Start the server
// startApolloServer();


























































































// import dotenv from 'dotenv';
// import express from 'express';
// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import db from './config/connection.js';
// import typeDefs from './graphql/typeDefs.js';
// import resolvers from './graphql/resolvers/index.js';

// dotenv.config(); // Load .env variables

// const app = express();

// // // Use .env for MongoDB URI if available
// // const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://haroutyunhaltunyan93:TOxbTgT3kG8fXtnS@loginproject3.puzfb.mongodb.net/?retryWrites=true&w=majority&appName=loginproject3";


// const MONGODB = "mongodb+srv://haroutyunhaltunyan93:TOxbTgT3kG8fXtnS@loginproject3.puzfb.mongodb.net/?retryWrites=true&w=majority&appName=loginproject3";



// const PORT = process.env.PORT || 3000;

// // Create a new ApolloServer instance
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req }), // Pass the request to the context if needed
// });

// const startApolloServer = async () => {
//   try {
//     // Start Apollo Server
//     await server.start();

//     // Middleware setup
//     app.use(express.urlencoded({ extended: false }));
//     app.use(express.json());

//     // Correct way to use Apollo Middleware
//     app.use('/graphql', expressMiddleware(server));

//     // Confirm MongoDB Connection
//     db.once('open', () => {
//       console.log('✅ MongoDB Connected');

//       // Start Express Server
//       app.listen(PORT, () => {
//         console.log(`API server running on port ${PORT}!`);
//         console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
//       });
//     });

//     // Handle MongoDB connection errors
//     db.on('error', (err) => {
//       console.error('❌ MongoDB connection error:', err);
//     });

//   } catch (error) {
//     console.error('❌ Error starting Apollo Server:', error);
//   }
// };

// // Start the server
// startApolloServer();












































// // import dotenv from 'dotenv';
// import express from 'express';
// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import db from './config/connection.js';
// import typeDefs from './graphql/typeDefs.js';
// import resolvers from './graphql/resolvers/index.js';

// const app = express();


// // // MongoDB connection string
// // const MONGODB = process.env.MONGODB_URI;

// const MONGODB = "mongodb+srv://haroutyunhaltunyan93:TOxbTgT3kG8fXtnS@loginproject3.puzfb.mongodb.net/?retryWrites=true&w=majority&appName=loginproject3";

// // Port configuration
// const PORT = process.env.PORT || 3000;

// // Create a new ApolloServer instance
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req }), // Pass the request to the context if needed
// });

// // Connect to MongoDB using Mongoose


// // this is mongodb when without.env

// const startApolloServer = async () => {
//   // start Apollo Server Instance
//   await server.start();
//   // Connect to our DataBase
//   await db;
//   // These 2 lines PARSE the INCOMING data BODY (req.body)
//   app.use(express.urlencoded({ extended: false}));
//   app.use(express.json());

//   app.use('/graphql', expressMiddleware);

//   app.listen(PORT, () => {
//     console.log("Server started...");
//   });
// };

// /*
//   .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB Connected');
//     // Start Apollo Server after MongoDB connection is successful
//     return server.listen({ port: PORT });
//   })
//   .then((res) => {
//     console.log(`Server running at ${res.url}`);
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err.message);
//   });
// */

// // // this is for mongodb in .env
// //   const MONGODB = process.env.MONGODB_URI;
// // mongoose.connect(MONGODB)
// //   .then(() => console.log('MongoDB Connected'))
// //   .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// startApolloServer();






// // import mongoose from 'mongoose';

// // dotenv.config();

// // const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/proj3';

// // mongoose.connect(MONGODB_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // const db = mongoose.connection;

// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// // db.once('open', () => {
// //   console.log('Connected to MongoDB');
// // });

// // export default db;


































// require('dotenv').config();
// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const mongoose = require('mongoose');
// const typeDefs = require('./graphql/typeDefs');
// const resolvers = require('./graphql/resolvers');

// const app = express();

// // MongoDB connection string
// const MONGODB = process.env.MONGODB_URI || 'mongodb://localhost:27017/proj3';

// // Port configuration
// const PORT = process.env.PORT || 4001;

// // Create a new ApolloServer instance
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req }), // Pass the request to the context if needed
// });

// // Start the Apollo Server and connect to MongoDB
// const startApolloServer = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(MONGODB, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');

//     // Start Apollo Server
//     await server.start();

//     // Middleware for Express
//     app.use(express.urlencoded({ extended: false }));
//     app.use(express.json());
//     app.use('/graphql', expressMiddleware(server));

//     // Start the server
//     app.listen(PORT, () => {
//       console.log(`Server started at http://localhost:${PORT}/graphql`);
//     });
//   } catch (err) {
//     console.error('Error starting server:', err.message);
//   }
// };

// // Start the server
// startApolloServer();





































// require('dotenv').config();

// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4'); // Destructure expressMiddleware
// const { json } = require('body-parser');
// const db = require('./config/connection'); // Ensure this is correctly exported in your project

// const typeDefs = require('./graphql/typeDefs');
// const resolvers = require('./graphql/resolvers');

// // MongoDB connection string
// const MONGODB = process.env.MONGODB_URI;

// // Port configuration
// const PORT = process.env.PORT || 4001;

// // Create a new ApolloServer instance
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req }), // Pass the request to the context if needed
// });

// // Start the Apollo Server
// const startApolloServer = async () => {
//   // Connect to MongoDB
//   await db; // Ensure the connection file handles the logic properly
//   console.log('MongoDB connected');

//   // Start the Apollo Server
//   await server.start();

//   // Initialize Express
//   const app = express();

//   // Parse incoming requests
//   app.use(json());

//   // Apply Apollo middleware
//   app.use('/graphql', expressMiddleware(server));

//   // Start listening
//   app.listen(PORT, () => {
//     console.log(`Server started at http://localhost:${PORT}/graphql`);
//   });
// };

// // Start the server
// startApolloServer().catch((error) => {
//   console.error('Error starting server:', error.message);
// });









// // Import dependencies
// import dotenv from 'dotenv';
// import express from 'express';
// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import db from './config/connection.js';
// import typeDefs from './graphql/typeDefs.js';
// import resolvers from './graphql/resolvers.js';

// // Configure environment variables
// dotenv.config();

// // Port configuration
// const PORT = process.env.PORT || 4001;

// // Create a new ApolloServer instance
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req }), // Pass the request to the context if needed
// });

// // Start the Apollo Server
// const startApolloServer = async () => {
//   try {
//     // Connect to MongoDB
//     await db; // Ensure this is properly configured in `connection.js`
//     console.log('MongoDB connected');

//     // Start Apollo Server
//     await server.start();

//     // Initialize Express
//     const app = express();

//     // Parse incoming requests
//     app.use(express.json());

//     // Apply Apollo middleware
//     app.use('/graphql', expressMiddleware(server));

//     // Start listening
//     app.listen(PORT, () => {
//       console.log(`Server started at http://localhost:${PORT}/graphql`);
//     });
//   } catch (error) {
//     console.error('Error starting server:', error.message);
//   }
// };

// // Start the server
// startApolloServer();