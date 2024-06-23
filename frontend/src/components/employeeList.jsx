import  { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [empleados, setEmpleados] = useState([]);
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
   } catch (error){
    console.log("Error al obtener los empleados", error);
   }
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:3500/api/employee/${id}`);
    getEmployee();
  };

  const handleInputChange = (e) => {
    setFiltroNombre(e.target.value);
    filterEmployees(e.target.value);
  };
  const filterEmployees = (filterValue) => {
    if (filterValue.trim() === '') {
      setEmpleadosFiltrados(empleados); // Si el filtro está vacío, mostrar todos los empleados
    } else {
      const filtered = empleados.filter((empleado) =>
        empleado.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      setEmpleadosFiltrados(filtered);
    }
  };

  return (
    <div>
        <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar por nombre..."
        value={filtroNombre}
        onChange={handleInputChange}
      />
      <div className="row">
        <Link to='/navigation' >Volver a inicio</Link>
        {empleadosFiltrados.map((empleado) => (
          <div className="col-md-12 p-2" key={empleado._id}>
            <div className="card">
              <div className="card-header">
                <h6>Empleado: {empleado.name}</h6>
              </div>
              <div className="card-body">
                <p>Servicio: {empleado.servicio}</p>
                <p>Ingreso: {format(empleado.date)}</p>
              </div>
              <div className="card-footer">
                <div className="btn d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(empleado._id)}
                  >
                    Eliminar
                  </button>
                  <Link className="btn btn-secondary" to={`/edit/${empleado._id}`}>
                    Editar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;




/*import { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class employeeList extends Component {
  state = {
    empleados: [],

  }
  componentDidMount() {
    
    this.getEmployee()
  }
  async getEmployee() {

    const res = await axios.get('http://localhost:3500/api/employee')
    this.setState({ empleados: res.data })
  }


  deleteEmployee = async (id) => {
    await axios.delete('http://localhost:3500/api/employee/' + id)
    this.getEmployee();
  }


  render() {
    return (
      <div>
        <div className="row">
          {
            this.state.empleados.map(empleados => (
              <div className="col-md-5 p-1" key={empleados._id}>
                <div className="card">
                  <div className="card-header">
                    <h6>Empleado: {empleados.name}</h6>

                  </div>
                  <div className="card-body">
                    <p>Servicio: {empleados.servicio}</p>
                    <p>Ingreso: {format(empleados.date)}</p>
                  </div>
                  <div className="card-footer ">
                    <div className="btn d-flex justify-content-between ">
                      <button className='btn btn-danger' onClick={() => this.deleteEmployee(empleados._id)}>Eliminar</button>
                      <Link className='btn btn-secondary' to={'/edit/' + empleados._id} >Editar
                      </Link>

                    </div>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}*/
