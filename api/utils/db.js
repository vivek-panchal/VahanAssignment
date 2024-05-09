const mongoose = require('mongoose');

module.exports = {
  getConnection: async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/headless-cms')
      console.log('MongoDB connected successfully!');
    } catch (err) {
      console.error('MongoDB connection error:', err);
    }
  },
};
