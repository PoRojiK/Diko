import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

// Path setup for static files (React app)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the build folder (React frontend)
app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes that don't match static files (React app entry point)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Registration route
app.post('/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Validate input fields
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Пароли не совпадают' });
  }

  try {
    // Check if the user already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Пользователь с таким email уже существует' });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // Respond with success message
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка при регистрации' });
  }
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
