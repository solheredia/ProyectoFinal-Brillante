/*import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const CreateEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [servicio, setServicio] = useState('');
  const [id, setId] = useState('');
  const { id: routeId } = useParams();
  const [editing, setEditing] = useState(false);


  useEffect(() => {
    if (routeId) {
      const fetchEmployee = async () => {
        try {
          const res = await axios.get(`http://localhost3500/api/employee/&{routeId}`)
          setName(res.data.name);
          servicio(res.data.servicio);
          setEditing(true);
          setId(routeId);

        } catch (error) {
          console.error('Error fetching employee:', error);
        }
      };
      fetchEmployee();
    }
  }, [routeId]);


  const fetchEmployees = async () => {
    try {

      const res = await axios.get('http://localhost:3500/api/employee');

      setEmployees(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };




/*const onChangeName = (e) => {
  setName(e.target.value);
};

const onChangeServicio = (e) => {
  setServicio(e.target.value);
};*/

/*const fetchEmployee = async () => {
  try {
    const res = await axios.get('http://localhost:3500/api/employee');
    setEmployees(res.data);
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching employee:', error);
  }
}
const onSubmit = async (e) => {
  e.preventDefault();
  const newEmployee = {name, servicio};
  try{
    if(editing) {
      await axios.put(`http://localhost:3500/api/employee/${id}`, newEmployee)
    }else{
      await axios.post('http://localhost3500/api/employee', newEmployee)
    }
    console.log('Empleado guardado');
    fetchEmployees();
    setName('');
    setServicio('');

  }catch (error){
    console.error('Error al guardar el empleado', error)
  }


};
return (
  <div className="row">
    <div className="col-md-8 p-2">
      <div className="card card-body">
        <h3>Añadir nuevo empleado</h3>
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <p> Nombre empleado</p>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
            />
            <p>Servicio empleado</p>
            <input
              type="text"
              className="form-control"
              value={servicio}
              onChange={(e)=>setServicio(e.target.value)}
              placeholder='Servicio'
            />
          </div>
          <div className='btn d-flex justify-content-between'>
            <button type='submit' className='btn btn-primary mx-6 p-2'>Guardar</button>
            <Link className='btn btn-secondary ' to={'/lista'}>Ver lista</Link>
          </div>
        </form>
      </div>
    </div>
    {/**<div className="col-md-8">
        <ul className="list-group">
          {employees.map((employee) => (
            <li className="list-group-item list-group-item-action" 
            key={employee._id}
            onDoubleClick={ () => deleteEmployee(employee._id)}
            >
              nombre:{employee.name}
              <br />
              servicio:{employee.servicio}
            </li>
          ))}
        </ul>
      </div>*/
 /* </div>
);
/*};


export default CreateEmployee;*/


import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const CreateEmployee = () => {
  const [/*employees,*/ setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [servicio, setServicio] = useState('');
  const [id, setId] = useState('');
  const { id: routeId } = useParams();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (routeId) {
      const fetchEmployee = async () => {
        try {
          const res = await axios.get(`http://localhost:3500/api/employee/${routeId}`);
          setName(res.data.name);
          setServicio(res.data.servicio);
          setEditing(true);
          setId(routeId);
        } catch (error) {
          console.error('Error fetching employee:', error);
        }
      };
      fetchEmployee();
    }
  }, [routeId]); // routeId es la única dependencia necesaria aquí

  const fetchEmployees = async () => {
    try {
      const res = await axios.get('http://localhost:3500/api/employee');
      setEmployees(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, servicio };
    try {
      if (editing) {
        await axios.put(`http://localhost:3500/api/employee/${id}`, newEmployee);
      } else {
        await axios.post('http://localhost:3500/api/employee', newEmployee);
      }
      console.log('Empleado guardado');
      fetchEmployees();
      setName('');
      setServicio('');
    } catch (error) {
      console.error('Error al guardar el empleado', error);
    }
  };

  return (
    <div className="row">
      <Link to='/navigation' >Volver a inicio</Link>
      <div className="col-md-10 p-2">
        <div className="card card-body">
          <h3>Añadir nuevo empleado</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group ">
              
              <p> Nombre empleado</p>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Nombre'
              />
              <br />
              <p>Servicio empleado</p>
              <input
                type="text"
                className="form-control"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                placeholder='Servicio'
              />
            </div>
            <div className='btn d-flex justify-content-between'>
              <button type='submit' className='btn btn-primary mx-6 p-2'>Cargar</button>
              <Link className='btn btn-secondary ' to={'/lista'}>Ver lista</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;

