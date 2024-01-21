// RegisterComponent.jsx
import React, { useState } from 'react';
import './registerStyles.css';
import api from '../../routing';



const RegisterComponent = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setemail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
      if (password1 !== password2) {
      return;
    }
    else{
      try{
        api.post('user/register/',{'username':username,'email':email, 'password':password1})
      }
      catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <form className={`register-form`} onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label className="register-label">
        Username:
        <input
          className="register-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className="register-label">
        email:
        <input
          className="register-input"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
      </label>
      <label className="register-label">
        Password:
        <input
          className="register-input"
          type="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
        />
      </label>
      <label className="register-label">
        Confirm Password:
        <input
        className="register-input"
        type="password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        required
      />
      </label>
      <button className="login-button" type="submit">
        Register
      </button>
</form>);
};

export default RegisterComponent;
