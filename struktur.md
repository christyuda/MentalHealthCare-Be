Struktur Folder mental_health_care_backend
│
├── config/
│ ├── database.js # Konfigurasi MongoDB
│ ├── express.js # Konfigurasi Express
│  
│
├── controllers/
│ ├── userController.js # Pengendali pengguna
│ ├── sessionController.js # Pengendali sesi konseling
│ ├── orderController.js # Pengendali perintah konseling
│ ├── progressNoteController.js # Pengendali catatan perkembangan
│ ├── serviceProviderController.js # Pengendali penyedia layanan
│ ├── messageController.js # Pengendali pesan dan notifikasi
│ ├── statisticsController.js # Pengendali statistik dan laporan
│  
│
├── models/
│ ├── User.js # Model pengguna
│ ├── Session.js # Model sesi konseling
│ ├── Order.js # Model perintah konseling
│ ├── ProgressNote.js # Model catatan perkembangan
│ ├── ServiceProvider.js # Model penyedia layanan
│ ├── Message.js # Model pesan dan notifikasi
│ ├── Statistics.js # Model statistik dan laporan
│  
│
├── routes/
│ ├── userRoutes.js # Rute pengguna
│ ├── sessionRoutes.js # Rute sesi konseling
│ ├── orderRoutes.js # Rute perintah konseling
│ ├── progressNoteRoutes.js # Rute catatan perkembangan
│ ├── serviceProviderRoutes.js # Rute penyedia layanan
│ ├── messageRoutes.js # Rute pesan dan notifikasi
│ ├── statisticsRoutes.js # Rute statistik dan laporan
│  
│
├── middleware/
│ ├── authMiddleware.js # Middleware otorisasi
│ ├── errorMiddleware.js # Middleware penanganan kesalahan
│  
│
├── tests/ # Unit tests dan pengujian lainnya
│
├── package.json # Konfigurasi proyek Node.js
├── package-lock.json # Lock file untuk dependensi
├── app.js # File utama aplikasi
└── README.md # Dokumentasi proyek

Struktur Database

1. Collection: Users (Pengguna)
   \_id: ID unik pengguna (dihasilkan otomatis oleh MongoDB).
   role: Peran pengguna (End user, Doctor, Admin).
   name: Nama lengkap pengguna.
   email: Alamat email pengguna.
   password: Kata sandi pengguna yang telah di-hash.
   phone: Nomor telepon pengguna (opsional).
   age: Umur pengguna (opsional).
   gender: Jenis kelamin pengguna (opsional).
   medicalHistory: Riwayat medis pengguna (dalam bentuk array atau objek).
   treatmentHistory: Riwayat perawatan sebelumnya (dalam bentuk array atau objek, jika ada).

2. Collection: CounselingSessions (Sesi Konseling)
   \_id: ID unik sesi konseling.
   userId: ID pengguna yang terkait dengan sesi ini.
   date: Tanggal sesi konseling.
   duration: Durasi sesi konseling.
   type: Jenis sesi (Terapi Individu, Terapi Keluarga, Terapi Kelompok, dll.).
   notes: Catatan atau keterangan sesi.

3. Collection: CounselingOrders (Perintah Konseling)
   \_id: ID unik perintah konseling.
   userId: ID pengguna yang terkait dengan perintah ini.
   dateCreated: Tanggal perintah konseling dibuat.
   serviceType: Jenis layanan yang diperlukan (Konseling Psikologis, Terapi Obat, Dukungan Keluarga, dll.).
   status: Status perintah (Dalam Proses, Selesai, Dibatalkan).
   instructions: Catatan atau instruksi khusus.

4. Collection: ProgressNotes (Catatan Perkembangan)
   \_id: ID unik catatan perkembangan.
   sessionId: ID sesi yang terkait dengan catatan ini.
   content: Catatan perkembangan kesehatan mental.
   date: Tanggal pencatatan.
   author: Penulis catatan (biasanya seorang profesional kesehatan mental).
   evaluationAndRecommendation: Evaluasi dan rekomendasi (jika ada).

5. Collection: ServiceProviders (Penyedia Layanan)
   \_id: ID unik penyedia layanan.
   name: Nama penyedia layanan.
   specialization: Spesialisasi penyedia layanan (Psikolog, Psikiater, Pekerja Sosial, dll.).
   contactInfo: Informasi kontak penyedia layanan (alamat kantor, nomor telepon, email).
   officeHours: Jam operasional penyedia layanan.
   serviceCost: Biaya layanan (jika relevan).

6. Collection: Settings (Pengaturan)
   \_id: ID unik pengaturan aplikasi.
   language: Bahasa yang dipilih oleh pengguna.
   userPreferences: Preferensi pengguna lainnya (jika ada).

7. Collection: Messages (Pesan dan Notifikasi)
   \_id: ID unik pesan atau notifikasi.
   senderId: ID pengirim pesan.
   receiverId: ID penerima pesan.
   content: Isi pesan atau notifikasi.
   timestamp: Waktu pengiriman pesan.

8. Collection: StatisticsAndReports (Statistik dan Laporan)
   \_id: ID unik statistik atau laporan.
   userId: ID pengguna yang terkait dengan statistik atau laporan ini.
   type: Jenis statistik atau laporan (Statistik Penggunaan, Laporan Aktivitas, dll.).
   data: Data statistik atau laporan.
