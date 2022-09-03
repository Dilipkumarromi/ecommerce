import Layout from '../core/layout';
import React,{useState } from 'react';
import {Navigate} from 'react-router-dom'
import { useNavigate } from 'react-router';
import Signoutoo from '../API/SignupAPI'

function Signout(){
    

    function Logout(){        
        
        return(
            <>
            <button className="btn btn-danger" onClick={Logout}>Logout</button>
            </>
        )
    }

    
    return (
        <>
          <Layout title="Signout" descriptions='Node React E-commerce App' className="container col-md-4 offset-md-2">
            { Logout()}
            {/* {JSON.stringify(value)} */}
          </Layout>
        </>
    )
}
export default Signout