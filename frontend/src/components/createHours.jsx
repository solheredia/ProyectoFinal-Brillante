import { Component } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

/*import { useState, useEffect } from 'react';
 
const CreateHours = () => {
  const [hour, setHour] = useState([]);
  const [Name, setName] = useState('');
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
 
 

  const onChangeName = (e) => {
    setName(e.target.value);
  };
 
  const onChangeHora = (e) => {
    setHora(e.target.value);
  };
 
  
const fetchHours = async () => {
  try {
    const res = await axios.get('http://localhost:3500/api/hours');
    setHour(res.data);
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching hours:', error);
  }
};
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3500/api/hours', {
        Name: Name,
        Hora: Hora
      });
      console.log(res);
      // Después de agregar exitosamente, actualiza la lista de horas
      fetchHours(); // Llama a fetchHour para obtener la lista actualizada
      // Limpia los campos después de enviar el formulario
      setName('');
      setHora('');
    } catch (error) {
      console.error('Error adding hour:', error);
    }
  };

  const deleteHour = async (id) =>{
   await axios.delete('http://localhost:3500/api/hours/' + id);
   fetchHours();
  }

return (
  <div className="row">
    <div className="col-md-4">
      <div className="card card-body">
        <h3>Cargar horas</h3>
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <p>Empleado</p>
            <input
              type="text"
              className="form-control"
               value={Name}
              onChange={onChangeName}
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
            <button type='submit' className='btn btn-primary'>cargar</button>
          </div>
        </form>

      </div>
    </div>
    <div className="col-md-8">
      <ul className="list-group">
        {hour.map((hour) => (
          <li className="list-group-item list-group-item-action" 
          key={hour._id}
          onDoubleClick={() => deleteHour(hour._id)}
          >
           
            empleado:{hour.Name}
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

export default CreateHours;*/
export default class CreateHours extends Component {
  state = {
    empleados: [],
    empleadoSelect: "",
    Hora: "",
    date: new Date()
  }
  async componentDidMount() {
    const res = await axios.get('http://localhost:3500/api/employee')
    this.setState({
       empleados: res.data.map(empleado => empleado.name), 
    
      })
    console.log(this.state.empleados);
  }
   onSubmit = async (e) => {
    e.preventDefault()
    const newHour = {
      Name: this.state.empleadoSelect,
      Hora: this.state.Hora,
      date: this.state.date
    }
    const res = await axios.post('http://localhost:3500/api/hours', newHour)
    console.log(res);
    //window.location.href = 'lista';

  }
  onInputChange = e =>{
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value

    })
  }
  
  onChangeDate = date =>{
    this.setState({date})
  }
  render() {
    return (
      <div className="col-md-8 p-2">
        <div className="card card-body">
          <h4>Cargar Horas</h4>
          {/**SELECT EMPLEADO */}
          <div className="form-group">
            <select
              className="form-control"
              name="empleadoSeleccionado"
              onChange={this.onInputChange}
            >

              {
                this.state.empleados.map(empleado =>
                <option key={empleado} value={empleado}>
                  {empleado}
                </option>)
              }

            </select>
          </div>
          <div className="form-group">
            <input type="text" 
            className="form-control md-4 p-2 " 
            placeholder="Hora"
            name="Hora"
            onChange={this.onInputChange} 
            required
            />
          </div>
          <div className="form-group">
            <DatePicker
            className="form-control"
            selected={this.state.date}
            onChange={this.onChangeDate}
            />
            
          </div>
          
          <form onSubmit={this.onSubmit}>

            <button type="submit" className="btn btn-primary">Actualizar</button>
          </form>
        </div>
      </div>
    )
  }
}




//solucionar fecha
//solucionar id empleado
//tipos de acceso
// q se suban los empleados y las horas
// que quede todo bonito 