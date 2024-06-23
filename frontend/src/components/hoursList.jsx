import  { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';


const ListaHoras = () => {
  const [horas, setHoras] = useState([]);

  useEffect(() => {
    getHours();
  }, []);

  const getHours = async () => {
    const res = await axios.get('http://localhost:3500/api/hours');
    setHoras(res.data);
  };

  const deleteHours = async (id) => {
    await axios.delete(`http://localhost:3500/api/hours/${id}`);
    getHours();
  };

  return (
    <div>
      <div className="row">
      <Link to='/navigation' >Volver a inicio</Link>
        {horas.map((hora) => (
          <div className="col-md-5 p-1" key={hora._id}>
            <div className="card">
              <div className="card-header">
                <h6>Empleado: {hora.Name}</h6>
              </div>
              <div className="card-body">
                <p>Horas extras realizadas: {hora.Hora}</p>
                <p> {format(hora.date)}</p>
              </div>
              <div className="card-footer">
                <div className="btn d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHours(hora._id)}
                  >
                    Eliminar Hora
                  </button>
                  <Link className="btn btn-secondary" to={`/editHour/${hora._id}`}>Editar Hora</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaHoras;