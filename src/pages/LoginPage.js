import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [error, setError] = useState('');

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      {error && <p className="login__error">{error}</p>}
      <LoginForm onLogin={onLogin} setError={setError} />
    </div>
  );
};

export default LoginPage;
