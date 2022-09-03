import React from 'react';
import Layout from '../core/layout';
import {useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
function Signin(){
  const [value,setValue]=useState({   
    email:"",
    password:""
})
const handleChange=name=>event=>{
    setValue({...value,error:false,[name]:event.target.value})
}
const Signin=async(myForm)=>{
  const p=  axios.post(`http://localhost:80/student/login`,myForm).then(result=>{
    // console.log(result.data.result.isActive)
    if(result.data.status==true)
    {
      // if(result.data.result.isActive==false)
      // {
      //   Swal.fire(
      //     'Oops!',
      //     `Not verify your account!`,
      //     'error'
      //   )
      // }
      
      authenticate(result.data.result,()=>{
        console.log(result.data.token)
      })
    }
    else{
      Swal.fire(
        'Oops!',
        `${result.data.message}`,
        'error'
      )
      console.log(result.data.message)

    }
    // if(result.data.)
   
  })
  // if(p){
  //   console.log('login',p)
  // }
  // else{
  //   console.log('login failed',p);
  // }
}
//jwt store token
const authenticate=(data,next)=>{
  if(typeof window!=='undefined'){
    localStorage.setItem('jwt',JSON.stringify(data));
    next();
  }
}

//isValid Person
const isAuthenticated =()=>{
  if(typeof window =='undefined'){
    return false;
  }
  if(localStorage.getItem('jwt'))
  {
    return JSON.parse(localStorage.getItem('jwt'));
  }
  else{
    return false;

  }
}


 const onLogin=(e)=>{
   e.preventDefault()
   Signin(value)
 }
 

  const SiginForm=()=>{
    return(
        <form onSubmit={onLogin}>
        <div className="row">      

         
          <div className="form-group mt-3">
                <input type="email" className="form-control" placeholder="Enter email" onChange={handleChange("email")}/>
            </div>

            <div className="form-group mt-3">
                <input type="password" className="form-control" placeholder="Enter password" onChange={handleChange("password")}/>
            </div>
          
            
         
          
           
        </div>
        <button className='btn btn-primary mt-2'>Login</button>
      </form>
    )
   
}
    return (
        <>
          <Layout title="Signin" descriptions='Node React E-commerce App' className="container col-md-4 offset-md-2">
            {SiginForm()}
            {JSON.stringify(value)}
          </Layout>
        </>
    )
}
export default Signin