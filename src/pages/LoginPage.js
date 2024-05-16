import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validUsername = 'admin';
  const validPassword = 'admin';

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username === validUsername && password === validPassword) {
      try {
        const response = { data: { token: 'fake-token' } };
        localStorage.setItem('token', response.data.token);
        onLogin();
        navigate('/inventory');
      } catch (err) {
        setError('Invalid username or password');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      {error && <p className="login__error">{error}</p>}
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
    </div>
  );
}

export default LoginPage;
