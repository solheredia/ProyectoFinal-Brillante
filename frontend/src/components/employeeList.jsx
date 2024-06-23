import { Component } from 'react'
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
}
