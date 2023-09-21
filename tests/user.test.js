const assert = require('assert');
const User = require('../models/User');

describe('User Model', () => {
  // Pengujian 1: Membuat pengguna dengan data lengkap
  it('should create a new user with complete data', async () => {
    const userData = {
      username: 'testuser',
      role: 'End user',
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
      phone: '1234567890', // Contoh nomor telepon (opsional)
      age: 30, // Contoh umur (opsional)
      gender: 'Male', // Contoh jenis kelamin (opsional)
      medicalHistory: [
        {
          date: '2023-09-21',
          condition: 'Anxiety',
          treatment: 'Counseling',
        },
        // Tambahkan riwayat medis lainnya sesuai format
      ],
      treatmentHistory: [
        {
          date: '2022-12-15',
          condition: 'Depression',
          treatment: 'Medication',
        },
        // Tambahkan riwayat perawatan sebelumnya lainnya sesuai format
      ],
    };
    const user = new User(userData);
    const savedUser = await user.save();
    assert.strictEqual(savedUser.username, userData.username);
    assert.strictEqual(savedUser.role, userData.role);
    assert.strictEqual(savedUser.name, userData.name);
    assert.strictEqual(savedUser.email, userData.email);
    assert.strictEqual(savedUser.phone, userData.phone);
    assert.strictEqual(savedUser.age, userData.age);
    assert.strictEqual(savedUser.gender, userData.gender);
    assert.deepStrictEqual(savedUser.medicalHistory, userData.medicalHistory);
    assert.deepStrictEqual(savedUser.treatmentHistory, userData.treatmentHistory);
  }).timeout(5000);

  // Pengujian 2: Mencoba membuat pengguna tanpa username (validasi)
  it('should not save a user without a username (validation)', async () => {
    try {
      const user = new User({
        role: 'End user',
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
        phone: '1234567890',
        age: 30,
        gender: 'Male',
        medicalHistory: [],
        treatmentHistory: [],
      });
      await user.validate();
      assert.fail('Validation should have failed'); // Assertion tambahan
    } catch (error) {
      assert.strictEqual(error.name, 'ValidationError');
      assert.ok(error.errors['username']);
      assert(error.message.includes('Path `username` is required.'));
    }
  });
  // Pengujian 3: Mencoba membuat pengguna tanpa email yang valid (validasi)
  it('should not save a user without a valid email (validation)', async () => {
    try {
      const user = new User({
        username: 'testuser2',
        role: 'End user',
        name: 'Test User',
        email: 'invalidemail',
        password: 'password123',
        phone: '1234567890',
        age: 30,
        gender: 'Male',
        medicalHistory: [],
        treatmentHistory: [],
      });
      await user.save();
    } catch (error) {
      assert(error.message.includes('Validation failed'));
      assert(error.errors['email']);
    }
  });

  // ... Tambahkan pengujian lainnya sesuai kebutuhan

}).timeout(5000);