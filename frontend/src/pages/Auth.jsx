import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AuthPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('/user/register', { username, password });
      if (response.data === true) {
        alert('User registered successfully');
      } else {
        alert('User already exists');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/user/login', { username, password });
      if (response.data === true) {
        navigate(`/api/${username}`); // Redirect to dashboard or any other page
      } else {
        alert('User does not exist');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h2>Login/Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '200px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '200px' }}
      />
      <div>
        <button onClick={handleLogin} style={{ marginRight: '10px', padding: '10px 20px' }}>Login</button>
        <button onClick={handleRegister} style={{ padding: '10px 20px' }}>Register</button>
      </div>
    </div>
  );
}

export default AuthPage;
