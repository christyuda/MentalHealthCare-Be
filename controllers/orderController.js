const Order = require('../models/CounselingOrder');
const User = require('../models/User');

// Mendapatkan daftar semua perintah konseling
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: orders,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data perintah konseling.' });
  }
};

// Membuat perintah konseling baru
const createOrder = async (req, res) => {
  const orderData = req.body;

  try {
    const newUser = await User.findById(orderData.userId);

    if (!newUser) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Pengguna tidak ditemukan.' });
    }

    const newOrder = new Order(orderData);
    await newOrder.save();
    
    const responseData = {
      code: 201,
      success: true,
      status: 'Created',
      data: newOrder,
    };
    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat membuat perintah konseling baru.' });
  }
};

// Mendapatkan detail perintah konseling berdasarkan ID
const getOrderById = async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Perintah konseling tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: order,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil detail perintah konseling.' });
  }
};

// Mengupdate perintah konseling berdasarkan ID
const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const updatedOrderData = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updatedOrderData, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Perintah konseling tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: updatedOrder,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengupdate perintah konseling.' });
  }
};

// Menghapus perintah konseling berdasarkan ID
const deleteOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const deletedOrder = await Order.findByIdAndRemove(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Perintah konseling tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      message: 'Perintah konseling berhasil dihapus.',
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat menghapus perintah konseling.' });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder
};
