
// module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rute untuk mendapatkan daftar semua pengguna
router.get('/', userController.getAllUsers);

// Rute untuk mendapatkan detail pengguna berdasarkan ID
router.get('/:id', userController.getUserById);

// Rute untuk membuat pengguna baru
router.post('/', userController.createUser);

// Rute untuk mengupdate pengguna berdasarkan ID
router.put('/:id', userController.updateUser);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
