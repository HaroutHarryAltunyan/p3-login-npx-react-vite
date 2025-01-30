const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://haroutyunhaltunyan93:rU2AozZmkagXt7be@cluster0.7scgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports = mongoose.connection;
