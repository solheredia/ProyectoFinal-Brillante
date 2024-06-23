/*import { useState, useEffect } from 'react';
import axios from 'axios';


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



 const onSubmit = async e => {
  e.preventDefault();
  const res= await axios.post('http://localhost:3500/api/hours',{
    Name: this.state.Name,
    Hora: this.state.Hora
  })
  console.log(res);
  
  
 }*/

  import { useState, useEffect } from 'react';
  import axios from 'axios';
  
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

export default CreateHours;

//solucionar fecha 
//solucionar id empleado 
//tipos de acceso 
// q se suban los empleados y las horas 
// que quede todo bonito 