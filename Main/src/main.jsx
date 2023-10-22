import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./components/Page/Home";
import About from "./components/Page/About";
import Portfolio from "./components/Page/Portfolio";
import Contact from "./components/Page/Contact";
import Resume from "./components/Page/Resume";

import './custom-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
