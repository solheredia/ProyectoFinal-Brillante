import { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    <div className="col-md-8 p-2">
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
        <div className="form-group">
          <DatePicker
            className="form-control"
            selected={date}
            onChange={onChangeDate}
          />
        </div>
        <form onSubmit={onSubmit}>
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHours;





//solucionar fecha
//solucionar id empleado
//tipos de acceso
// q se suban los empleados y las horas
// que quede todo bonito 