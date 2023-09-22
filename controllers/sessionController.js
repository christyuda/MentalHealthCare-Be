const Session = require('../models/CounselingSession');

// Mendapatkan daftar semua sesi konseling
const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: sessions
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data sesi konseling.' });
  }
};

// Mendapatkan detail sesi konseling berdasarkan ID
const getSessionById = async (req, res) => {
  const sessionId = req.params.id;

  try {
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Sesi konseling tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: session
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data sesi konseling.' });
  }
};

// Membuat sesi konseling baru
const createSession = async (req, res) => {
  const sessionData = req.body;

  try {
    const newSession = new Session(sessionData);
    await newSession.save();
    const responseData = {
      code: 201,
      success: true,
      status: 'Created',
      data: newSession
    };
    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat membuat sesi konseling baru.' });
  }
};

// Mengupdate sesi konseling berdasarkan ID
const updateSession = async (req, res) => {
  const sessionId = req.params.id;
  const updatedSessionData = req.body;

  try {
    const updatedSession = await Session.findByIdAndUpdate(sessionId, updatedSessionData, { new: true });
    if (!updatedSession) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Sesi konseling tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: updatedSession
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengupdate sesi konseling.' });
  }
};

// Menghapus sesi konseling berdasarkan ID
const deleteSession = async (req, res) => {
  const sessionId = req.params.id;

  try {
    const deletedSession = await Session.findByIdAndRemove(sessionId);
    if (!deletedSession) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Sesi konseling tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      message: 'Sesi konseling berhasil dihapus.'
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat menghapus sesi konseling.' });
  }
};

module.exports = {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession
};
