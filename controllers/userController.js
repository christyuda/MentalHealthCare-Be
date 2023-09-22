const User = require('../models/User');

// Mendapatkan daftar semua pengguna
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().timeout(10000);
    const responseData = {
      code: 200,        // Menambah properti 'code'
      success: true,    // Menambah properti 'success'
      status: 'OK',     // Menambah properti 'status'
      data: users       // Mengatur data ke dalam properti 'data'
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data pengguna.' });
  }
};


// Mendapatkan detail pengguna berdasarkan ID
const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Pengguna tidak ditemukan.' });
    }
    const responseData = {
      code: 200,        // Menambah properti 'code'
      success: true,    // Menambah properti 'success'
      status: 'OK',     // Menambah properti 'status'
      data: user        // Mengatur data ke dalam properti 'data'
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data pengguna.' });
  }
};

// Membuat pengguna baru
const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = new User(userData);
    await newUser.save();
    const responseData = {
      code: 201,        // Menambah properti 'code'
      success: true,    // Menambah properti 'success'
      status: 'Created', // Menambah properti 'status'
      data: newUser     // Mengatur data ke dalam properti 'data'
    };
    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat membuat pengguna baru.' });
  }
};

// Mengupdate pengguna berdasarkan ID
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Pengguna tidak ditemukan.' });
    }
    const responseData = {
      code: 200,        // Menambah properti 'code'
      success: true,    // Menambah properti 'success'
      status: 'OK',     // Menambah properti 'status'
      data: updatedUser // Mengatur data ke dalam properti 'data'
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengupdate pengguna.' });
  }
};

// Menghapus pengguna berdasarkan ID
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Pengguna tidak ditemukan.' });
    }
    const responseData = {
      code: 200,        // Menambah properti 'code'
      success: true,    // Menambah properti 'success'
      status: 'OK',     // Menambah properti 'status'
      message: 'Pengguna berhasil dihapus.' // Menambah properti 'message'
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat menghapus pengguna.' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
