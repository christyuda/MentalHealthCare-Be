const Message = require('../models/Message');
const User = require('../models/User');

// Mengirim pesan baru
const sendMessage = async (req, res) => {
  const { senderId, recipientId, content } = req.body;

  try {
    // Pastikan pengirim dan penerima adalah pengguna yang valid
    const sender = await User.findById(senderId);
    const recipient = await User.findById(recipientId);

    if (!sender || !recipient) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: 'Not Found',
        message: 'Pengirim atau penerima tidak ditemukan.',
      });
    }

    const newMessage = new Message({
      senderId,
      recipientId,
      content,
    });

    await newMessage.save();

    const responseData = {
      code: 201,
      success: true,
      status: 'Created',
      data: newMessage,
    };

    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: 'Internal Server Error',
      message: 'Terjadi kesalahan saat mengirim pesan.',
    });
  }
};

// Mendapatkan pesan berdasarkan ID
const getMessageById = async (req, res) => {
  const messageId = req.params.id;

  try {
    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: 'Not Found',
        message: 'Pesan tidak ditemukan.',
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: message,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: 'Internal Server Error',
      message: 'Terjadi kesalahan saat mengambil pesan.',
    });
  }
};

// Menandai pesan sebagai telah dibaca
const markMessageAsRead = async (req, res) => {
  const messageId = req.params.id;

  try {
    const message = await Message.findByIdAndUpdate(
      messageId,
      { isRead: true },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: 'Not Found',
        message: 'Pesan tidak ditemukan.',
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: message,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: 'Internal Server Error',
      message: 'Terjadi kesalahan saat menandai pesan sebagai telah dibaca.',
    });
  }
};

module.exports = {
  sendMessage,
  getMessageById,
  markMessageAsRead,
};
