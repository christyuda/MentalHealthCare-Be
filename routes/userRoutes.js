// const express = require('express');
// const router = express.Router();

// // Import model User (gantilah dengan path yang sesuai)
// const User = require('../models/User');

// // Rute untuk mendapatkan daftar semua pengguna
// router.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data pengguna.' });
//   }
// });

// // Rute untuk mendapatkan detail pengguna berdasarkan ID
// router.get('/users/:id', async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data pengguna.' });
//   }
// });

// // Rute untuk membuat pengguna baru
// router.post('/users', async (req, res) => {
//   const userData = req.body;

//   try {
//     const newUser = new User(userData);
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Terjadi kesalahan saat membuat pengguna baru.' });
//   }
// });

// // Rute untuk mengupdate pengguna berdasarkan ID
// router.put('/users/:id', async (req, res) => {
//   const userId = req.params.id;
//   const updatedUserData = req.body;

//   try {
//     const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
//     }
//     res.json(updatedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Terjadi kesalahan saat mengupdate pengguna.' });
//   }
// });

// // Rute untuk menghapus pengguna berdasarkan ID
// router.delete('/users/:id', async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const deletedUser = await User.findByIdAndRemove(userId);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
//     }
//     res.json({ message: 'Pengguna berhasil dihapus.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Terjadi kesalahan saat menghapus pengguna.' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rute untuk mendapatkan daftar semua pengguna
router.get('/', userController.getAllUsers);

// Rute untuk mendapatkan detail pengguna berdasarkan ID
router.get('/:id', userController.getUserById);

// Rute untuk membuat pengguna baru
router.post('/', userController.createUser);

// Rute untuk mengupdate pengguna berdasarkan ID
router.put('/:id', userController.updateUser);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
