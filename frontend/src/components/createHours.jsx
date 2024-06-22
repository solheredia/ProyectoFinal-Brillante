/*import React, { Component } from 'react'

export default class createHours extends Component {
  render() {
    return (
      <div>
        Create Hours
      </div>
    )
  }
} esto teniamos*/

import { useState, useEffect } from 'react';
import axios from 'axios';
//import Navigation from './navigation';

const CreateHours = () => {
  const [hour, setHour] = useState([]);
  const [IdEmpleado, setIdEmpleado] = useState('');
  const [Hora, setHora] = useState('');

  useEffect(() => {
    const fetchHour = async () => {
      try {
        const res = await axios.get('http://localhost:3500/api/hours');
        setHour(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching hours:', error);
      }
    };
    fetchHour();
  }, []);

  const onChangeIdEmpleado = (e) => {
    setIdEmpleado(e.target.value);
  };

  const onChangeHora = (e) => {
    setHora(e.target.value);
  };

  const handleClick = () => {
    alert('hora cargado');
  };

  return (


    <div className="row">
      {//   <Navigation />
      }
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Cargar horas</h3>
          <form action="">
            <div className="form-group">
              <p>Empleado</p>
              <input
                type="text"
                className="form-control"
                value={IdEmpleado}
                onChange={onChangeIdEmpleado}
              />
              <p>Horas Realizadas</p>
              <input
                type="text"
                className="form-control"
                value={Hora}
                onChange={onChangeHora}
              />
            </div>
            <div>
              <button onClick={handleClick}>cargar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          {hour.map((hour) => (
            <li className="list-group-item list-group-item-action" key={hour._id}>
              empleado:{hour.IdEmpleado}
              <br />
              fecha{hour.date}
              <br />
              horas realizadas:{hour.Hora}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateHours;

//solucionar fecha 
//solucionar id empleado 