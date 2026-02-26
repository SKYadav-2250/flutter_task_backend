const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI missing');
    }

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

module.exports = connectDB;