const ServiceProvider = require('../models/ServiceProvider');

// Mendapatkan daftar semua penyedia layanan
const getAllServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await ServiceProvider.find();
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: serviceProviders,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data penyedia layanan.' });
  }
};

// Membuat penyedia layanan baru
const createServiceProvider = async (req, res) => {
  const serviceProviderData = req.body;

  try {
    const newServiceProvider = new ServiceProvider(serviceProviderData);
    await newServiceProvider.save();
    const responseData = {
      code: 201,
      success: true,
      status: 'Created',
      data: newServiceProvider,
    };
    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat membuat penyedia layanan baru.' });
  }
};

// Mendapatkan detail penyedia layanan berdasarkan ID
const getServiceProviderById = async (req, res) => {
  const serviceProviderId = req.params.id;

  try {
    const serviceProvider = await ServiceProvider.findById(serviceProviderId);
    if (!serviceProvider) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Penyedia layanan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: serviceProvider,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil detail penyedia layanan.' });
  }
};

// Mengupdate penyedia layanan berdasarkan ID
const updateServiceProvider = async (req, res) => {
  const serviceProviderId = req.params.id;
  const updatedServiceProviderData = req.body;

  try {
    const updatedServiceProvider = await ServiceProvider.findByIdAndUpdate(serviceProviderId, updatedServiceProviderData, { new: true });
    if (!updatedServiceProvider) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Penyedia layanan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: updatedServiceProvider,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengupdate penyedia layanan.' });
  }
};

// Menghapus penyedia layanan berdasarkan ID
const deleteServiceProvider = async (req, res) => {
  const serviceProviderId = req.params.id;

  try {
    const deletedServiceProvider = await ServiceProvider.findByIdAndRemove(serviceProviderId);
    if (!deletedServiceProvider) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Penyedia layanan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      message: 'Penyedia layanan berhasil dihapus.',
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat menghapus penyedia layanan.' });
  }
};

module.exports = {
  getAllServiceProviders,
  createServiceProvider,
  getServiceProviderById,
  updateServiceProvider,
  deleteServiceProvider
};
