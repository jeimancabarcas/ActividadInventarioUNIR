import React from 'react';
import '../styles/UserProfile.css';

const UserProfileForm = ({ user, onChange, onSave }) => {
  return (
    <form className="user-profile__form">
      <div className="user-profile__form-group">
        <label className="user-profile__label" htmlFor="username">Username:</label>
        <input
          className="user-profile__input"
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
        />
      </div>
      <button className="user-profile__button" type="button" onClick={onSave}>Guardar</button>
    </form>
  );
};

export default UserProfileForm;
