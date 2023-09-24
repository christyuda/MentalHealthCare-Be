const express = require('express');
const router = express.Router();
const progressNoteController = require('../controllers/progressNoteController');

// Rute untuk mendapatkan semua catatan perkembangan
router.get('/', progressNoteController.getAllProgressNotes);

// Rute untuk mendapatkan catatan perkembangan berdasarkan ID
router.get('/:id', progressNoteController.getProgressNoteById);

// Rute untuk membuat catatan perkembangan baru
router.post('/', progressNoteController.createProgressNote);

// Rute untuk mengupdate catatan perkembangan berdasarkan ID
router.put('/:id', progressNoteController.updateProgressNote);

// Rute untuk menghapus catatan perkembangan berdasarkan ID
router.delete('/:id', progressNoteController.deleteProgressNote);

module.exports = router;
