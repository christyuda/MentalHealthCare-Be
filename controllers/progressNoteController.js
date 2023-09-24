const ProgressNote = require('../models/ProgressNote');

// Mendapatkan daftar semua catatan perkembangan
const getAllProgressNotes = async (req, res) => {
  try {
    const progressNotes = await ProgressNote.find();
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: progressNotes,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data catatan perkembangan.' });
  }
};

// Mendapatkan detail catatan perkembangan berdasarkan ID
const getProgressNoteById = async (req, res) => {
  const progressNoteId = req.params.id;

  try {
    const progressNote = await ProgressNote.findById(progressNoteId);
    if (!progressNote) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Catatan perkembangan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: progressNote,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengambil data catatan perkembangan.' });
  }
};

// Membuat catatan perkembangan baru
const createProgressNote = async (req, res) => {
  const progressNoteData = req.body;

  try {
    const newProgressNote = new ProgressNote(progressNoteData);
    await newProgressNote.save();
    const responseData = {
      code: 201,
      success: true,
      status: 'Created',
      data: newProgressNote,
    };
    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat membuat catatan perkembangan baru.' });
  }
};

// Mengupdate catatan perkembangan berdasarkan ID
const updateProgressNote = async (req, res) => {
  const progressNoteId = req.params.id;
  const updatedProgressNoteData = req.body;

  try {
    const updatedProgressNote = await ProgressNote.findByIdAndUpdate(progressNoteId, updatedProgressNoteData, { new: true });
    if (!updatedProgressNote) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Catatan perkembangan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      data: updatedProgressNote,
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat mengupdate catatan perkembangan.' });
  }
};

// Menghapus catatan perkembangan berdasarkan ID
const deleteProgressNote = async (req, res) => {
  const progressNoteId = req.params.id;

  try {
    const deletedProgressNote = await ProgressNote.findByIdAndRemove(progressNoteId);
    if (!deletedProgressNote) {
      return res.status(404).json({ code: 404, success: false, status: 'Not Found', message: 'Catatan perkembangan tidak ditemukan.' });
    }
    const responseData = {
      code: 200,
      success: true,
      status: 'OK',
      message: 'Catatan perkembangan berhasil dihapus.',
    };
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, success: false, status: 'Internal Server Error', message: 'Terjadi kesalahan saat menghapus catatan perkembangan.' });
  }
};

module.exports = {
  getAllProgressNotes,
  getProgressNoteById,
  createProgressNote,
  updateProgressNote,
  deleteProgressNote,
};
