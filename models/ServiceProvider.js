const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  contactInfo: {
    address: String,
    phoneNumber: String,
    email: String,
  },
  officeHours: String,
  serviceCost: String,
});

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);
