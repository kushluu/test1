// LoginComponent.jsx
import React, { useState } from 'react';
import './loginStyles.css';
import { Link } from 'react-router-dom';
import api from '../../routing';
import { useNavigate } from 'react-router-dom';



const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      api.post('user/login/',{'username': username, 'password': password}).then((response) => {
        console.log(response);
      if(response?.data?.message==='Login successful!')
      {
        navigate('/next-page');
      }
      })
      
       }
    catch(err){
      console.log(err);
    }  
  };

  return (
    
      <form className={`login-form`} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label className="login-label">
        Username:
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className="login-label">
        Password:
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className="login-button" type="submit">
        Login
      </button>
      <p>
     Don't have an account? <Link to="/register">Register here</Link>.
   </p>
    </form>
    
    
    
  );
};

export default LoginComponent;
