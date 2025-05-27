import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom" 

import Home from "./Components/Pages/Home"
import Navigation from "./Components/Pages/Navigation"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<Navigate to={"/"}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
