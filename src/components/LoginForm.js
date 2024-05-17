import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginForm = ({ onLogin, setError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validUsername = 'admin';
  const validPassword = 'admin';

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username === validUsername && password === validPassword) {
      const user = {
        username,
        name: 'Jeiman Cabarcas',
        email: 'jeimancabarcas@gmail.com',
      };
      localStorage.setItem('user', JSON.stringify(user));
      onLogin();
      navigate('/inventory');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form className="login__form" onSubmit={handleLogin}>
      <div className="login__form-group">
        <label className="login__label" htmlFor="username">Username:</label>
        <input
          className="login__input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="login__form-group">
        <label className="login__label" htmlFor="password">Password:</label>
        <input
          className="login__input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="login__button" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
