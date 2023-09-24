const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

// Rute untuk mendapatkan semua statistik dan laporan
router.get('/', statisticsController.getAllStatisticsAndReports);

// Rute untuk membuat statistik atau laporan baru
router.post('/', statisticsController.createStatisticsAndReport);

// Rute untuk mendapatkan detail statistik atau laporan berdasarkan ID
router.get('/:id', statisticsController.getStatisticsAndReportById);

// Rute untuk mengupdate statistik atau laporan berdasarkan ID
router.put('/:id', statisticsController.updateStatisticsAndReport);

// Rute untuk menghapus statistik atau laporan berdasarkan ID
router.delete('/:id', statisticsController.deleteStatisticsAndReport);

module.exports = router;
