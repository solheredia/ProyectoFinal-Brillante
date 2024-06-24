import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container-fluid fs-4">
        <a className="navbar-brand fs-4" href="#" >Brillante</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/create/hour">Cargar Horas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create/user">Crear Empleado</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="lista">Lista Empleados</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="listaHoras">Lista Horas </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="position-fixed top-0 end-0 m-3">
      <div className="btn btn-outline-white">
        <Link to='/ingresar' className="text-decoration-none text-white">
          Cerrar Sesión
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Navigation;
