import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { SignIn } from './pages/SignIn';
import { Reptile } from './pages/Reptile';
import { CreateUser } from './pages/CreateUser';
import { HomePage } from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import { Header } from './pages/header';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/reptile',
    element: <Reptile />
  },
  {
    path: "/createUser",
    element: <CreateUser />
  },
  {
    path: "/dash",
    element: <Dashboard />
  }
])

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App