import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { FaUser, FaUnlockKeyhole } from "react-icons/fa6";

  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // redireccion
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // autenticacion de admin ruben
      if (username === 'Ruben Gonzalez' && password === 'admin123') {
        //redirrecion a navigation
        navigate('/navigation');
      } else {
        // redireccion para empleados
        navigate('/emp');
      }
    };
  return (
    <div className='wrapper'>
      <form className='conteiner' onSubmit={handleSubmit} >
        <h2 className="title">Login Brillante</h2>
        <div className="input-box">
          <input
            className="box"
            type="text"
            placeholder='Usuario'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button className="boton" type='submit' >Ingresar</button>

      </form>

    </div>


  );
}

export default Login;
