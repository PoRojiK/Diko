const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: { type: [String], default: [] },
  cart: { type: Array, default: [] },
  notifications: { type: Array, default: [] },
  deliveries: [
    {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      status: { type: String, default: 'Pending' }, // Статусы: 'Pending', 'Shipped', 'Delivered'
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
