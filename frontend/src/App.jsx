//import { useState } from 'react'
//import { createBrowserRouter , RouterProvider as Route } from "react-router-dom";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from "./components/navigation" //lo descomento pq ahora lo usamos
import CreateEmployee from "./components/createEmployee"
import CreateHour from "./components/createHours"
import Login from "./components/login"
import EmployeeList from "./components/employeeList" //use la ruta asiq la descomente
import Empleado from "./components/empleado"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <div className='container p-4'>

        { /* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/edit/:id' element={<CreateEmployee />} />
          <Route path='/create/hour' element={<CreateHour />} />
          <Route path='ingresar' element={<Login />} />
          <Route path='/create/user' element={<CreateEmployee />} />
          <Route path='navigation' element ={<Navigation/>}/>
          <Route path='lista' element ={<EmployeeList/>}/>
          <Route path='emp' element ={<Empleado/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}       

export default App;
