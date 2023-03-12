import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom"
import { ApiContext } from "./contexts/api"
import { Api } from './lib/api'
import { SignIn } from './pages/SignIn'
import { Reptile } from './pages/Reptile'
import { User } from './pages/User'
import { CreateUser } from './pages/CreateUser'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateUser />,
    children: [
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/reptile',
        element: <Reptile />
      },
      {
        path: '/',
        element: <User />
      }
    ]
  }
])

export const App = () => {
  const [api, setApi] = useState(new Api())

  
  return (
    <>
      <ApiContext.Provider value={api}>
        <RouterProvider router={router}/>
      </ApiContext.Provider>
    </>
      
  )
}

export default App