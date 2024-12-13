import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './api/githubApi.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
// This file sets up the React application's routing configuration using react-router-dom

// The router is created using createBrowserRouter with routes defined using JSX
// Main routes:
// - / : Home page
// - /about : About page  
// - /contact : Contact page
// - /github : Github profile page (loads data via githubInfoLoader)

// All routes are wrapped in a Layout component that provides consistent page structure
// StrictMode is enabled for additional checks during development
