const mongoose = require('mongoose');

const counselingSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: Date,
  duration: String,
  type: String,
  notes: String,
});

module.exports = mongoose.model('CounselingSession', counselingSessionSchema);
