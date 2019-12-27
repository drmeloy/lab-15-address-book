const mongoose = require('mongoose');

const schema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: String,
  country: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  groups: [String]
});

module.exports = mongoose.model('Entry', schema);
