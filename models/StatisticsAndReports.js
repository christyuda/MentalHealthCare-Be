const mongoose = require('mongoose');

const statisticsAndReportsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: String,
  data: {
    // Definisikan struktur data statistik atau laporan di sini
  },
});

module.exports = mongoose.model('StatisticsAndReports', statisticsAndReportsSchema);
