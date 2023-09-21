const mongoose = require('mongoose');

const counselingOrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dateCreated: Date,
  serviceType: String,
  status: String,
  instructions: String,
});

module.exports = mongoose.model('CounselingOrder', counselingOrderSchema);
