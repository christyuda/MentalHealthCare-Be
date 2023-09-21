const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['End user', 'Doctor', 'Admin'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  age: Number,
  gender: String,
  medicalHistory: [{
    condition: String,
    diagnosisDate: Date,
    treatment: String,
  }],
  treatmentHistory: [{
    treatmentType: String,
    treatmentDate: Date,
    doctorName: String,
  }],
});

module.exports = mongoose.model('User', userSchema);
