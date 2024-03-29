import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { SignIn } from './pages/SignIn';
import { Reptile } from './pages/Reptile';
import { CreateUser } from './pages/CreateUser';
import { HomePage } from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import { Header } from './pages/header';
import { CreateReptile } from './pages/CreateReptile';

import { Layout } from './pages/layout';

import { CreateScheduleRep } from "./pages/CreateScheduleRep";
import { CreateHusbandry } from "./pages/CreateHusbandry";
import { CreateFeed } from "./pages/CreateFeed";
import { useState } from "react";
import { UpdateRep } from "./pages/UpdateRep";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [ 
    {path: '/',
      element: <HomePage />,},
    {
      path: '/signin',
      element: <SignIn />
    },
    {
      path: '/reptile/:id/:name/:sex/:species',
      element: <Reptile />
    },
    {
      path: "/createUser",
      element: <CreateUser />
    },
    {
      path: "/dash",
      element: <Dashboard />
    },
    {
      path: "/createRep",
      element: <CreateReptile />
    },
    {
      path: "/header",
      element: <Header />
      
    },  {
      path: '/signin',
      element: <SignIn />
    },
    {
      path: '/reptile/:id/:name/:sex/:species',
      element: <Reptile />
    },
    {
      path: "/createUser",
      element: <CreateUser />
    },
    {
      path: "/dash",
      element: <Dashboard />
    },
    {
      path: "/createRep",
      element: <CreateReptile />
    },
    {
      path: "/header",
      element: <Header />
    },
    {
      path: "/createScheduleRep/:id/:name/:sex/:species",
      element: <CreateScheduleRep/>
    },
    {
      path: "/createHusbandry/:id/:name/:sex/:species",
      element: <CreateHusbandry/>
    },
    {
      path: "/createFeed/:id/:name/:sex/:species",
      element: <CreateFeed/>
    },
  {
    path: "/updateRep/:idC/:nameC/:sexC/:speciesC",
    element: <UpdateRep />
  }]
  },


])

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App