import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WishList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const requiresAuth = location.state?.requiresAuth;

  return (
    <div className="p-4">
      {requiresAuth ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Войдите в аккаунт</h1>
          <p>Чтобы просмотреть избранное, пожалуйста, авторизуйтесь.</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => navigate('/login')}
          >
            Войти
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Избранное</h1>
          {/* Логика отображения избранных товаров */}
        </div>
      )}
    </div>
  );
};

export default WishList;
