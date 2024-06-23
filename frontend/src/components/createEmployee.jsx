import { useState, useEffect } from 'react';
import axios from 'axios';

const CreateEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [servicio, setServicio] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:3500/api/employee');
        setEmployees(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeServicio = (e) => {
    setServicio(e.target.value);
  };

  const fetchEmployee = async () => {
    try {
      const res = await axios.get('http://localhost:3500/api/employee');
      setEmployees(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:3500/api/employee', {
          name: name,
          servicio: servicio,
        });
        console.log(res);
        fetchEmployee();
        setName('');
        setServicio('');
      } catch (error) {
        console.error('Error adding hour:', error);
      }
    };

    const deleteEmployee = async (id) =>{
     await axios.delete('http://localhost:3500/api/employee/' + id);
     fetchEmployee();
    }

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Añadir nuevo empleado</h3>
          <form action="" onSubmit={onSubmit}>
            <div className="form-group">
              <p> Nombre empleado</p>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={onChangeName}
              />
              <p>Servicio empleado</p>
              <input
                type="text"
                className="form-control"
                value={servicio}
                onChange={onChangeServicio}
              />
            </div>
            <div>
            <button type='submit' className='btn btn-primary'>cargar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-8">
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
      </div>
    </div>
  );
};

export default CreateEmployee;
