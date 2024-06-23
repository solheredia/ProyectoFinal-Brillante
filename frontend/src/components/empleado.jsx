import  { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';

const EmployeePanel = () => {
  const [empleados, setEmpleados] = useState([]);
//agrego
  const [filtroNombre, setFiltroNombre] = useState('');
  const [empleadosFiltrados, setEmpleadosFiltrados] = useState([]);
  
  useEffect(() => {
    getEmployee();
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

  return (
    <div>
      <div className="row">
        <h3 className='text-white'>Panel Empleados</h3>
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
    </div>
  );
};

export default EmployeePanel;
