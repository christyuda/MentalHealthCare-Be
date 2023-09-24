const mongoose = require('mongoose');

// Skema (Schema) untuk model Sesi Konseling
const sessionSchema = new mongoose.Schema({
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',     
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  durationInMinutes: {
    type: Number,
    required: true
  },
  notes: {
    type: String
  }
});

// Membuat model Sesi Konseling
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
