const StatisticsAndReports = require('../models/StatisticsAndReports');

// Mendapatkan semua statistik dan laporan
const getAllStatisticsAndReports = async (req, res) => {
  try {
    const statisticsAndReports = await StatisticsAndReports.find();
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: statisticsAndReports,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data statistik dan laporan.' });
  }
};

// Membuat statistik atau laporan baru
const createStatisticsAndReport = async (req, res) => {
  const statisticsAndReportData = req.body;

  try {
    const newStatisticsAndReport = new StatisticsAndReports(statisticsAndReportData);
    await newStatisticsAndReport.save();
    
    const responseData = {
      code: 201,
      success: true,
      status: 'Created',
      data: newStatisticsAndReport,
    };
    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat membuat statistik atau laporan baru.' });
  }
};

// Mendapatkan detail statistik atau laporan berdasarkan ID
const getStatisticsAndReportById = async (req, res) => {
  const statisticsAndReportId = req.params.id;

  try {
    const statisticsAndReport = await StatisticsAndReports.findById(statisticsAndReportId);
    if (!statisticsAndReport) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Statistik atau laporan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: statisticsAndReport,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil detail statistik atau laporan.' });
  }
};

// Mengupdate statistik atau laporan berdasarkan ID
const updateStatisticsAndReport = async (req, res) => {
  const statisticsAndReportId = req.params.id;
  const updatedStatisticsAndReportData = req.body;

  try {
    const updatedStatisticsAndReport = await StatisticsAndReports.findByIdAndUpdate(statisticsAndReportId, updatedStatisticsAndReportData, { new: true });
    if (!updatedStatisticsAndReport) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Statistik atau laporan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: updatedStatisticsAndReport,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengupdate statistik atau laporan.' });
  }
};

// Menghapus statistik atau laporan berdasarkan ID
const deleteStatisticsAndReport = async (req, res) => {
  const statisticsAndReportId = req.params.id;

  try {
    const deletedStatisticsAndReport = await StatisticsAndReports.findByIdAndRemove(statisticsAndReportId);
    if (!deletedStatisticsAndReport) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Statistik atau laporan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      message: 'Statistik atau laporan berhasil dihapus.',
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat menghapus statistik atau laporan.' });
  }
};

module.exports = {
  getAllStatisticsAndReports,
  createStatisticsAndReport,
  getStatisticsAndReportById,
  updateStatisticsAndReport,
  deleteStatisticsAndReport
};
