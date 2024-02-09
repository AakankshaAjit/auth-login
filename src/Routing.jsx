import React from 'react'

import {BrowserRouter,Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'




import Next from './components/Next'
import Auth from './components/Auth'










const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
    

    <Routes>
      
    
    <Route path='/Next' element={<Next/>}/>
    <Route path='/Auth'  element={<Auth/>}/>
    <Route path='/Login'  element={<Auth/>}/>
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    

    
    
    
    
    
    
    
        

        
    


    </Routes>
         


    
    
    
    
    </BrowserRouter>




  )
}

export default Routing