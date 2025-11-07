import Document from '@/pages/Document'
import Home from '@/pages/Home'
// import React from 'react'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/instruction",
      element: <Document />,
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
  
}

export default Router