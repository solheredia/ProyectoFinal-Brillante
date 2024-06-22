//import React from 'react';
import '../styles/login.css';
import { FaUser, FaUnlockKeyhole } from "react-icons/fa6";


const Login = () => {







  return (
    <div className='wrapper'>

      <form className='conteiner' >
        <h2 className="title">Login Brillante</h2>
        <div className="input-box">
          <input
            className="box"
            type="text"
            placeholder='Usuario'

            required />
          <FaUser className='icon' />

        </div>
        <div className="input-box">
          <input className='box'
            type="password"
            placeholder='Password'

            required />
          <FaUnlockKeyhole className='icon' />

        </div>
        <div className="remember-forgot">
          <label><input className="lab-inp" type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button className="boton" type='submit'>Ingresar</button>

      </form>
    </div>


  );
}

export default Login;
