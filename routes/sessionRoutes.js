const express = require('express');
const router = express.Router();
const SessionController = require('../controllers/sessionController');

// Rute untuk mendapatkan daftar semua pengguna
router.get('/', SessionController.getAllSessions);

// Rute untuk mendapatkan detail pengguna berdasarkan ID
router.get('/:id', SessionController.getSessionById);

// Rute untuk membuat pengguna baru
router.post('/', SessionController.createSession);

// Rute untuk mengupdate pengguna berdasarkan ID
router.put('/:id', SessionController.updateSession);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', SessionController.deleteSession);

module.exports = router;
