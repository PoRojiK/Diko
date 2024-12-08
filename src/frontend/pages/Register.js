import React, { useState } from 'react';
import axios from 'axios';

function Register({ currentTheme }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // Обработчик изменений в полях формы
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setSuccess(false);

        // Проверка совпадения паролей
        if (formData.password !== formData.confirmPassword) {
            setError('Пароли не совпадают.');
            return;
        }

        try {
            const response = await axios.post(
                'http://ryuo.store/src/backend/api/register.php', // URL вашего PHP-скрипта
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data.error) {
                setError(response.data.error);
            } else {
                setSuccess(true);
                setMessage(response.data.message || 'Регистрация прошла успешно!');
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            }
        } catch (error) {
            setError('Ошибка при отправке данных. Проверьте соединение с сервером.');
        }
    };

    return (
        <div className={`flex justify-center items-center min-h-screen ${currentTheme.mainBackground} ${currentTheme.text}`}>
            <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${currentTheme.cardBackground}`}>
                <h2 className="text-2xl font-bold text-center mb-4">Регистрация</h2>
                {success && (
                    <div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="mb-4 p-3 text-red-700 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium mb-1">
                            Имя пользователя
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg ${currentTheme.input.background} ${currentTheme.input.text} ${currentTheme.input.border} focus:outline-none focus:ring-2 ${currentTheme.input.focusRing}`}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg ${currentTheme.input.background} ${currentTheme.input.text} ${currentTheme.input.border} focus:outline-none focus:ring-2 ${currentTheme.input.focusRing}`}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg ${currentTheme.input.background} ${currentTheme.input.text} ${currentTheme.input.border} focus:outline-none focus:ring-2 ${currentTheme.input.focusRing}`}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                            Подтвердите пароль
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-lg ${currentTheme.input.background} ${currentTheme.input.text} ${currentTheme.input.border} focus:outline-none focus:ring-2 ${currentTheme.input.focusRing}`}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 rounded-lg ${currentTheme.button.primary} hover:${currentTheme.button.primaryHover} text-white font-bold`}
                    >
                        Зарегистрироваться
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Уже есть аккаунт?{' '}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Войти
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
