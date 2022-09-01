import { BrowserRouter,Route,Routes } from "react-router-dom"
import React from "react"
import Signin from '../user/Signin'
import Signup from '../user/Signup'


const Routeslist=()=>{
    return(
    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path="/Signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}
export default Routeslist