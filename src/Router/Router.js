import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react"
import Signin from '../user/Signin'
import Signup from '../user/Signup'
import Home from '../core/Home'
import Menu from '../core/Menu'

const Routeslist=()=>{

    return(   
    <BrowserRouter>
    <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
        
        
    )
}
export default Routeslist