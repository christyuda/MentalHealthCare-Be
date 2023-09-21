// errorMiddleware.js

// Middleware untuk menangani kesalahan validasi (gunakan ini jika Anda menggunakan validator, misalnya, express-validator)
const handleValidationErrors = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
      // Tangani kesalahan validasi di sini, misalnya, kirim respons dengan pesan kesalahan
      return res.status(400).json({ message: 'Terjadi kesalahan validasi.', errors: err.errors });
    }
    // Lanjutkan ke middleware berikutnya jika bukan kesalahan validasi
    next();
  };
  
  // Middleware untuk menangani kesalahan umum
  const handleErrors = (err, req, res, next) => {
    // Tangani kesalahan umum di sini, misalnya, log kesalahan dan kirim respons kesalahan yang sesuai
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan server.' });
  };
  
  module.exports = { handleValidationErrors, handleErrors };
  