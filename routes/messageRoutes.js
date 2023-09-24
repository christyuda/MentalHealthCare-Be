const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Rute untuk mengirim pesan baru
router.post('/', messageController.sendMessage);

// Rute untuk mendapatkan pesan berdasarkan ID
router.get('/:id', messageController.getMessageById);

// Rute untuk menandai pesan sebagai telah dibaca
router.put('/mark-as-read/:id', messageController.markMessageAsRead);

module.exports = router;
