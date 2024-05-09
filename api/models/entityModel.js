const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  mobileNumber: {
    type: Number,
  },
  dateOfBirth: {
    type: Date,
  },
});

module.exports = mongoose.model('Entity', entitySchema);
