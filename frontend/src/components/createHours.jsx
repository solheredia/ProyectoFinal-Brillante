import { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const CreateHours = () => {
  const [empleados, setEmpleados] = useState([]);
  const [empleadoSelect, setEmpleadoSelect] = useState('');
  const [Hora, setHora] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:3500/api/employee');
        setEmpleados(res.data.map(empleado => empleado.name));
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newHour = {
      Name: empleadoSelect,
      Hora,
      date
    };

    try {
      const res = await axios.post('http://localhost:3500/api/hours', newHour);
      console.log(res);
      //window.location.href = 'lista';
    } catch (error) {
      console.error('Error submitting hours:', error);
    }
  };

  const onInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    switch (e.target.name) {
      case 'empleadoSeleccionado':
        setEmpleadoSelect(e.target.value);
        break;
      case 'Hora':
        setHora(e.target.value);
        break;
      default:
        break;
    }
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  return (
    <div> 
    <Link to='/navigation' >Volver a inicio</Link>
    <div className="col-md-20 p-2">
      
      <div className="card card-body">
        <h4>Cargar Horas</h4>
        {/**SELECT EMPLEADO */}
        <div className="form-group">
          <select
            className="form-control"
            name="empleadoSeleccionado"
            onChange={onInputChange}
          >
            {empleados.map(empleado => (
              <option key={empleado} value={empleado}>
                {empleado}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            className="form-control md-4 p-2"
            placeholder="Hora"
            name="Hora"
            onChange={onInputChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <DatePicker
            className="form-control"
            selected={date}
            onChange={onChangeDate}
          />
        </div>
        <br />
        <form onSubmit={onSubmit}>
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
          <Link className='btn btn-secondary ' to={'/listaHoras'}>Ver lista horas</Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CreateHours;

//tipos de acceso
//vista empleados 
// que quede todo bonito
//poder editar las horas 