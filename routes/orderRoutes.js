const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Mendapatkan daftar semua perintah konseling
router.get('/', orderController.getAllOrders);

// Membuat perintah konseling baru
router.post('/', orderController.createOrder);

// Mendapatkan detail perintah konseling berdasarkan ID
router.get('/:id', orderController.getOrderById);

// Mengupdate perintah konseling berdasarkan ID
router.put('/:id', orderController.updateOrder);

// Menghapus perintah konseling berdasarkan ID
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
