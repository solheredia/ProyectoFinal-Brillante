import React from 'react';

const Login = () => {
  return (
   
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <div className="container mt-5">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="usuario" className="form-label">Usuario</label>
                      <input type="usuario" className="form-control" id="usuario" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
   
  );
}

export default Login;
