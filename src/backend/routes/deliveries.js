const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Получить доставки пользователя
router.get('/', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user.deliveries);
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Добавить доставку
router.post('/', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const { address, city, postalCode } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const newDelivery = { address, city, postalCode };
    user.deliveries.push(newDelivery);
    await user.save();

    res.status(201).json({ message: 'Delivery added successfully', deliveries: user.deliveries });
  } catch (err) {
    res.status(500).json({ error: 'Error adding delivery' });
  }
});

module.exports = router;
