const mongoose = require('mongoose');

const statisticsAndReportsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: String,
  data: {
  },
});

module.exports = mongoose.model('StatisticsAndReports', statisticsAndReportsSchema);
