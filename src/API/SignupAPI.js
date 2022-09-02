import axios from "axios"
import Swal from 'sweetalert2'
import { Navigate } from "react-router-dom"
 // require('dotenv').config()
const SignupAPI=async(myForm)=>{
 
    Swal.fire({
        title: 'Are you sure? Save',          
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Save it!'
      }).then((result) => {
        if (result.isConfirmed) {
            const p=  axios.post(`http://localhost:80/student/register`,myForm)
            Swal.fire(
                'Saved!',
                'Your file has been Saved!.',
                'success'
              )
            console.log('register',p)
             
           
        }
      })
 
}


 
export default [SignupAPI]