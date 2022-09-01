import React,{useState} from 'react';
import Layout from '../core/layout';
const Signup=()=>{
    const [value,setValue]=useState({
        fname:"",
        lastname:"",
        // name:fname+""+lastname,
        email:"",
        gender:"",
        city:"",
        password:""
    })
    const handleChange=name=>event=>{
        setValue({...value,error:false,[name]:event.target.value})
    }
    const SignupForm=()=>{
        return(
            <form>
            <div className="row">         

              <div className="col">
                <input type="text" className="form-control" placeholder="First name" onChange={handleChange("fname")}/>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" onChange={handleChange("lastname")}/>
              </div>
              <div className="form-group mt-3">
                    <input type="email" className="form-control" placeholder="Enter email" onChange={handleChange("email")}/>
                </div>
              
                <div className="col">
                    <label className="col-sm-2 control-label mt-3">Gender</label>
                <select className="form-select mt-2" onChange={handleChange("gender")}>
                    <option value="">---Select---</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    
                </select>
              </div>
             
              <div className="col">
                    <label className="col-sm-2 control-label mt-3">City</label>
                <select className="form-select mt-2" onChange={handleChange("city")}>
                    <option value="">---Select---</option>
                    <option value="1">Kolkata</option>
                    <option value="2">Delhi</option>
                    <option value="3">Mumbai</option>
                </select>
              </div>
            </div>
            <button className='btn btn-primary mt-2'>Submit</button>
          </form>
        )
       
    }
    return(
        <>
             <Layout title="Signup" descriptions='Node React E-commerce App' className="container col-md-8 offset-md-2">
             {SignupForm()}
             {JSON.stringify(value)}
             </Layout>
            
        </>
    )
   
}
export default Signup