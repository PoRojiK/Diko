import axios from 'axios';

export const fetchDeliveries = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) throw new Error('No token found');

  const response = await axios.get('/api/deliveries', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const addDelivery = async (delivery) => {
  const token = localStorage.getItem('authToken');
  if (!token) throw new Error('No token found');

  const response = await axios.post('/api/deliveries', delivery, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
