// // import dotenv from 'dotenv';
// // dotenv.config();


// // import mongoose from 'mongoose';

// // mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/proj3');

// // const db = mongoose.connection;

// // export default db;

// import dotenv from 'dotenv';
// dotenv.config();

// import mongoose from 'mongoose';

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/proj3', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// export default db;







import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

// Log the MongoDB URI to verify it's loaded
console.log("🔍 Connecting to MongoDB:", process.env.MONGODB_URI);

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/proj3';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/proj3';

mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ Successfully connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

const db = mongoose.connection;

export default db;