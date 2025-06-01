import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom" 

import Home from "./Components/Pages/Home"
import Navigation from "./Components/Pages/Navigation"
import AboutMe from './Components/Pages/AboutMe'
import Projects from './Components/Pages/Projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='*' element={<Navigate to={"/"}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
