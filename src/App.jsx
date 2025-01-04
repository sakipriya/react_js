//import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Router/Home"
import About from "./Router/About"
import Contactus from "./Router/Contactus"
import Services from "./Router/Services"
import Career from "./Router/Career"
import Footer from "./Router/Footer"

export default function App() {

  
  return (
    <div>
     
     <BrowserRouter>
       <Routes>
         <Route  path="/"element={<Layout/>}>

         <Route index element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="contactus" element={<Contactus/>}/>
         <Route path="services" element={<Services/>}/>
         <Route path="career" element={<Career/>}/>
         <Route path="footer" element={<Footer/>}/> 
          
          </Route>
        </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}


