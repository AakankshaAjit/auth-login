import React from 'react'

import {BrowserRouter,Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'



import Login from './components/Login'
import Next from './components/Next'





const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Next' element={<Next/>}/>
    
    
    
    
    
    
    
        

        
    


    </Routes>
         


    
    
    
    
    </BrowserRouter>




  )
}

export default Routing