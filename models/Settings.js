const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  language: String,
  userPreferences: {
    // Definisikan preferensi pengguna lainnya di sini
  },
});

module.exports = mongoose.model('Settings', settingsSchema);
