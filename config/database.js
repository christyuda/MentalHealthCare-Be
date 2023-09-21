const mongoose = require('mongoose');

// URI koneksi MongoDB Anda
const dbURI = 'mongodb+srv://chrisyuda:mental123@cluster0.wzy4rke.mongodb.net/mental_health_care';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Terhubung ke MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Kesalahan koneksi MongoDB:', err);
});

module.exports = mongoose;
