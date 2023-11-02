import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import About from "./page/About.jsx";
import Portfolio from "./page/Portfolio.jsx";
import Contact from "./page/Contact.jsx";
import Resume from "./page/Resume.jsx";


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element: <About />
    },
    {
      path: 'portfolio',
      element: <Portfolio />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'resume',
      element: <Resume />
    }
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
