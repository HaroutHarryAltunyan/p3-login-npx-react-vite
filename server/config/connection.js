// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://haroutyunhaltunyan93:rU2AozZmkagXt7be@cluster0.7scgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// module.exports = mongoose.connection;




// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables from .env

// // Use the environment variable or fallback to localhost (for development)
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mydatabase";

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', (err) => console.error('❌ MongoDB connection error:', err));
// db.once('open', () => console.log('✅ Connected to MongoDB! 🚀'));

// module.exports = db;





const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mydatabase';

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', (err) => console.error('❌ MongoDB connection error:', err));
db.once('open', () => console.log('✅ Connected to MongoDB! 🚀'));

module.exports = db;