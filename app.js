// const express = require('express');
// const mongoose = require('mongoose');
// const { app, port } = require('./config/express');

// // Import rute-rute aplikasi
// const userRoutes = require('./routes/userRoutes');
// // const sessionRoutes = require('./routes/sessionRoutes');
// // const orderRoutes = require('./routes/orderRoutes');
// // const progressNoteRoutes = require('./routes/progressNoteRoutes');
// // const serviceProviderRoutes = require('./routes/serviceProviderRoutes');
// // const messageRoutes = require('./routes/messageRoutes');
// // const statisticsRoutes = require('./routes/statisticsRoutes');

// // Menghubungkan ke MongoDB menggunakan URI koneksi Anda
// mongoose.connect('mongodb+srv://chrisyuda:mental123@cluster0.wzy4rke.mongodb.net/mental_health_care', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Terhubung ke MongoDB');
//   })
//   .catch((err) => {
//     console.error('Kesalahan koneksi MongoDB:', err);
//   });

// // Middleware untuk mengizinkan pengolahan data JSON
// app.use(express.json());

// // Menggunakan rute-rute aplikasi
// app.use('/api/users', userRoutes);
// // app.use('/api/sessions', sessionRoutes);
// // app.use('/api/orders', orderRoutes);
// // app.use('/api/progress-notes', progressNoteRoutes);
// // app.use('/api/service-providers', serviceProviderRoutes);
// // app.use('/api/messages', messageRoutes);
// // app.use('/api/statistics', statisticsRoutes);

// // Rute beranda
// app.get('/', (req, res) => {
//   res.send('Selamat datang di API Mental Health Care!');
// });

// // Menjalankan server
// app.listen(port, () => {
//   console.log(`Server berjalan di port ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const { app, port } = require('./config/express');

// Import rute-rute aplikasi
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

// Menghubungkan ke MongoDB menggunakan URI koneksi Anda
mongoose.connect('mongodb+srv://chrisyuda:mental123@cluster0.wzy4rke.mongodb.net/mental_health_care', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Terhubung ke MongoDB');
  })
  .catch((err) => {
    console.error('Kesalahan koneksi MongoDB:', err);
  });

// Middleware untuk mengizinkan pengolahan data JSON
app.use(express.json());

// Menggunakan rute-rute aplikasi
app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionRoutes);


// Rute beranda
app.get('/', (req, res) => {
  res.send('Selamat datang di API Mental Health Care!');
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}