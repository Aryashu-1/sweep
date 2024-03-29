import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Admindashboard from './Components/AdminDashboard/Admindashboard'
import First from './Components/First/First'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import DisplayMap from './Components/Map/DisplayMap'
import Mapdemo from './Components/Mapdemo/Mapdemo'
import Root_layout from './Components/Root_Layout/Root_layout'
import Signup from './Components/Signup/Signup'
const App = () => {
  let router=createBrowserRouter([{
    path: '',
    element: <Root_layout/>,
    children:[
      {
        path:'/mapdemo',
        element:<Mapdemo/>
      },
      {
        path:"",
        element:<First/>,

      },
      {
        path:"/login",
        element: <Login/>,
      },
      {
        path:"/signup",
        element:<Signup/>,
      },
      {
        path:"/home",
        element:<Home/>,
      },
      {
        path:"/Admindashboard",
        element: <Admindashboard/>
      },
      {
        path:'/locationtracker',
        element:<DisplayMap/>
      }
    ]
  }
  ])
  return (
    
    <RouterProvider router={router} />
  )
}

export default App