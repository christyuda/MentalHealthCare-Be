const express = require('express');
const router = express.Router();
const SessionController = require('../controllers/serviceProviderController');

// Rute untuk mendapatkan daftar semua pengguna
router.get('/', SessionController.getAllServiceProviders);

// Rute untuk mendapatkan detail pengguna berdasarkan ID
router.get('/:id', SessionController.getServiceProviderById);

// Rute untuk membuat pengguna baru
router.post('/', SessionController.createServiceProvider);

// Rute untuk mengupdate pengguna berdasarkan ID
router.put('/:id', SessionController.updateServiceProvider);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', SessionController.deleteServiceProvider);

module.exports = router;
