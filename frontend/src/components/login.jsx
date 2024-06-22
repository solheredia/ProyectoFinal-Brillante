//import React from 'react';
import '../styles/login.css';
import { FaUser, FaUnlockKeyhole } from "react-icons/fa6";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CreateEmployee from './createEmployee';

const Login = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] =useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { name, password });
      const { success, token, user } = response.data;
      if (success) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(CreateEmployee));
        if (user.role === 'admin') {
          history.push('/admin');
        } else {
          history.push('/employee');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed.Please check your credentials and try again')
      alert('Login failed. Please check your credentials and try again.');
      
    }
  };





  return (
    <div className='wrapper'>

      <form className='conteiner' onSubmit={handleLogin}>
        <h2 className="title">Login Brillante</h2>
        <div className="input-box">
          <input
            className="box"
            type="text"
            placeholder='Usuario'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
          <FaUser className='icon' />

        </div>
        <div className="input-box">
          <input className='box' 
          type="password"
           placeholder='Password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
            required />
          <FaUnlockKeyhole className='icon' />

        </div>
        <div className="remember-forgot">
          <label><input className="lab-inp" type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button className="boton" type='submit'>Ingresar</button>
        {error && <p className='error-message'>{error}</p>}
      </form>
    </div>


  );
}

export default Login;
