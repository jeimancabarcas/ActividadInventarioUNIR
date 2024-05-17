import React, { useState } from 'react';
import '../styles/UserProfile.css';

const UserProfilePage = () => {
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser ? storedUser : { username: '', name: '', email: '' };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(user));
    alert('Perfil actualizado correctamente');
  };

  return (
    <div className="user-profile">
      <h2>Perfil</h2>
      <form className="user-profile__form">
        <div className="user-profile__form-group">
          <label className="user-profile__label" htmlFor="username">Username:</label>
          <input
            className="user-profile__input"
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="user-profile__form-group">
          <label className="user-profile__label" htmlFor="name">Nombre:</label>
          <input
            className="user-profile__input"
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="user-profile__form-group">
          <label className="user-profile__label" htmlFor="email">Email:</label>
          <input
            className="user-profile__input"
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <button className="user-profile__button" type="button" onClick={handleSave}>Guardar</button>
      </form>
    </div>
  );
};

export default UserProfilePage;
