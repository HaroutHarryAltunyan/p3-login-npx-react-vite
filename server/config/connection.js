const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mydatabase');

module.exports = mongoose.connection;





// const mongoose = require('mongoose');
// require('dotenv').config(); // Load .env file

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mydatabase';

// mongoose.connect(MONGODB_URI);

// const db = mongoose.connection;

// db.on('error', (err) => console.error('❌ MongoDB connection error:', err));
// db.once('open', () => console.log('✅ Connected to MongoDB! 🚀'));

// module.exports = db;