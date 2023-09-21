const mongoose = require('mongoose');

const progressNoteSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CounselingSession',
    required: true,
  },
  content: String,
  date: Date,
  author: String,
  evaluationAndRecommendation: String,
});

module.exports = mongoose.model('ProgressNote', progressNoteSchema);
