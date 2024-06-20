//import { useState } from 'react'
import { createBrowserRouter , RouterProvider as Route } from "react-router-dom";

import Navigation from "./components/navigation"
import CreateEmployee from "./components/createEmployee"
import CreateHour from "./components/createHours"
import Login from "./components/login"
import EmployeeList from "./components/employeeList"

function App() {
  return (
    const router = createBrowserRouter([
      {
          path:'/',
          element:<EmployeeList/>,
          errorElement:<ErrorCustom/>
      },
      {
          path:'/edit/:id',
          element:<CreateEmployee/>,
          errorElement:<ErrorCustom/>
      },
      {
          path:'/create',
          element:<CreateHour/>,
          errorElement:<ErrorCustom/>
      },
      {
          path:'/user',
          element:<CreateEmployee/>,
          errorElement:<ErrorCustom/>
      },
  
  ])
  
  class App extends Component {
      render() {
          return (
              <>
                  <Navigation/>
                  <RouterProvider router={router}/>
                  </>

        )
    }
}
}

  //ver codigo porq esta mal se supone q es el actualizado no del video !

export default App
