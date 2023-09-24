# Mental Health Care Backend

## Deskripsi Proyek

Proyek ini adalah backend untuk aplikasi Mental Health Care, yang bertujuan untuk menyediakan layanan kesehatan mental kepada pengguna. Backend ini mengelola data pengguna, sesi konseling, perintah konseling, catatan perkembangan, penyedia layanan, pesan, statistik, dan laporan.

## Struktur Folder

Berikut adalah struktur folder proyek:

- `config/`: Konfigurasi MongoDB dan Express.
- `controllers/`: Pengendali untuk berbagai entitas dalam aplikasi.
- `models/`: Definisi model untuk MongoDB.
- `routes/`: Rute-rute aplikasi.
- `middleware/`: Middleware untuk otorisasi dan penanganan kesalahan.
- `tests/`: Unit tests dan pengujian lainnya.
- `package.json`: Konfigurasi proyek Node.js.
- `package-lock.json`: Lock file untuk dependensi.
- `app.js`: Berkas utama aplikasi.
- `README.md`: Dokumentasi proyek ini.

## Penggunaan

1. Instal dependensi proyek dengan menjalankan perintah:

   ```bash
   npm install
   ```

Hubungkan proyek ke basis data MongoDB Anda dengan mengedit berkas config/database.js.

Jalankan server dengan perintah:

## npm start

Server akan berjalan di port yang ditentukan dan akan terhubung ke basis data MongoDB.

Rute Aplikasi
/api/users: Rute untuk pengguna.
/api/sessions: Rute untuk sesi konseling.
/api/orders: Rute untuk perintah konseling.
/api/progress-notes: Rute untuk catatan perkembangan.
/api/service-providers: Rute untuk penyedia layanan.
/api/messages: Rute untuk pesan dan notifikasi.
/api/statistics: Rute untuk statistik dan laporan.
