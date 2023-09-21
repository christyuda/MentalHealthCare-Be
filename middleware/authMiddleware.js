// authMiddleware.js

// Fungsi middleware otorisasi
const authorize = (roles) => {
    return (req, res, next) => {
      // Dapatkan peran pengguna dari data otorisasi yang telah Anda terapkan
      const userRole = req.user.role;
  
      // Periksa apakah pengguna memiliki otorisasi yang sesuai
      if (!roles.includes(userRole)) {
        return res.status(403).json({ message: 'Anda tidak memiliki izin untuk mengakses sumber daya ini.' });
      }
  
      // Jika pengguna memiliki otorisasi yang sesuai, lanjutkan ke middleware berikutnya atau rute
      next();
    };
  };
  
  module.exports = { authorize };
  