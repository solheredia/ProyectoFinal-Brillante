//import { useState } from 'react'
//import { createBrowserRouter , RouterProvider as Route } from "react-router-dom";

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from "./components/navigation"
import CreateEmployee from "./components/createEmployee"
import CreateHour from "./components/createHours"
import Login from "./components/login"
//import EmployeeList from "./components/employeeList"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import React from 'react';


function App() {
  return (
    <BrowserRouter>
          <Navigation />
          <Routes>
          <Route path='/' element={<Login />}/>
          <Route  path='/edit/:id'element={<CreateEmployee/>}/>
          <Route path = '/create/hour' element = {<CreateHour/>}/>
          <Route path = 'ingresar' element = {<Login/>}/>
          <Route path = '/create/user' element = {<CreateEmployee/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
