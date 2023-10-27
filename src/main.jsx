import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./components/Page/Home.jsx";
import About from "./components/Page/About.jsx";
import Portfolio from "./components/Page/Portfolio.jsx";
import Contact from "./components/Page/Contact.jsx";
import Resume from "./components/Page/Resume.jsx";

import './custom-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: 'about',
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
