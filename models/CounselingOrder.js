const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Informasi tentang perintah konseling
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // ID pengguna yang diberikan perintah
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Tanggal pembuatan perintah
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Status perintah (misalnya, 'pending', 'completed', dll.)
  status: {
    type: String,
    enum: ['pending', 'completed', 'canceled'],
    default: 'pending',
  },
});

const Order = mongoose.model('CounselingOrder', orderSchema);

module.exports = Order;
