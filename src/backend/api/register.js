import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt'; // Для хэширования паролей

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Пожалуйста, заполните все поля' });
    }

    try {
      // Проверяем, существует ли пользователь с таким email
      const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
      if (existingUser.rowCount > 0) {
        return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
      }

      // Хэшируем пароль
      const hashedPassword = await bcrypt.hash(password, 10);

      // Вставляем нового пользователя в базу данных
      await sql`
        INSERT INTO users (username, email, password)
        VALUES (${username}, ${email}, ${hashedPassword})
      `;

      return res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
    } catch (error) {
      console.error('Ошибка базы данных:', error);
      return res.status(500).json({ message: 'Ошибка сервера. Попробуйте позже.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Метод ${req.method} не поддерживается` });
  }
}