import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom"
import { SignIn } from './pages/SignIn'
import { Reptile } from './pages/Reptile'
import { User } from './pages/User'
import { CreateUser } from './pages/CreateUser'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateUser />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/reptile',
    element: <Reptile />
  }])

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App