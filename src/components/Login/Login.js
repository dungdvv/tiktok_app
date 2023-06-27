import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/login', { username, password })
      .then((response) => {
        // Done
        localStorage.setItem('accessToken', response.data.accessToken);
        // Move to Home page
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tên đăng nhập:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Mật khẩu:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Đăng nhập</button>
    </form>
  );
}
export default Login;
