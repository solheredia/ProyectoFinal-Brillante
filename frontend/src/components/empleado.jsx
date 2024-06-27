import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeePanel = () => {
  const [empleados, setEmpleados] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [empleadosFiltrados, setEmpleadosFiltrados] = useState([]);

  useEffect(() => {
    getEmployee();
  }, []);

  useEffect(() => {
    const loadVoiceflowChatbot = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: '667dde352a730391a8de5460' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      };
      document.body.appendChild(script);

      return () => {
        // Remover el script cuando el componente se desmonte
        document.body.removeChild(script);
      };
    };

    loadVoiceflowChatbot();
  }, []);

  const getEmployee = async () => {
    try {
      const res = await axios.get('http://localhost:3500/api/employee');
      setEmpleados(res.data);
      setEmpleadosFiltrados(res.data);
    } catch (error) {
      console.error('Error al obtener los empleados:', error);
    }
  };

  const handleInputChange = (e) => {
    setFiltroNombre(e.target.value);
    filterEmployees(e.target.value);
  };

  const filterEmployees = (filterValue) => {
    if (filterValue.trim() === '') {
      setEmpleadosFiltrados(empleados);
    } else {
      const filtered = empleados.filter((empleado) =>
        empleado.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      setEmpleadosFiltrados(filtered);
    }
  };

 /* const openChatbot = () => {
    if (window.voiceflow && window.voiceflow.chat) {
      window.voiceflow.chat.open();
    }
  };*/

  return (
    <div>
      <div className="row">
        <h3 className="text-white">Panel Empleados</h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Buscar por nombre..."
          value={filtroNombre}
          onChange={handleInputChange}
        />
        {empleadosFiltrados.map((empleado) => (
          <div className="col-md-3 p-2" key={empleado._id}>
            <div className="card">
              <div className="card-header">
                <h6>Empleado: {empleado.name}</h6>
              </div>
              <div className="card-body">
                <p>Servicio: {empleado.servicio}</p>
                <p>Ingreso: {format(empleado.date)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="position-fixed top-0 end-0 m-3">
        <div className="btn btn-outline-white">
          <Link to="/ingresar" className="text-decoration-none text-white">
            Cerrar Sesión
          </Link>
        </div>
        {/*<button className="btn btn-primary mt-3" onClick={openChatbot}>
          Abrir Chatbot
        </button>*/}
      </div>
    </div>
  );
};

export default EmployeePanel;
