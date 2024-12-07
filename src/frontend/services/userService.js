import axios from 'axios';

export const fetchUserData = async () => {
  const token = localStorage.getItem('authToken'); // Токен авторизации
  if (!token) throw new Error('User not authenticated');

  const response = await axios.get('/api/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};
