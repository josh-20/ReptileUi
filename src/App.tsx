import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom"
import { SignIn } from './pages/SignIn'
import { Reptile } from './pages/Reptile'
import { User } from './pages/User'
import { CreateUser } from './pages/CreateUser'
import { Dashboard } from './pages/Dashboard'
import { Schedules } from './pages/Schedules'
import { HusbandryRecords } from './pages/HusbandryRecords'

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
  },
  {
    path: '/Schedules',
    element: <Schedules />
  },
  {
    path: '/husbandryRecords',
    element: <HusbandryRecords />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App