import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter, Route, Routes} from "react-router-dom" 

import Home from "./Components/Pages/Home"
import Navigation from "./Components/Pages/Navigation"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation></Navigation>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
