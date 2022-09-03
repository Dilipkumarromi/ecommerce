import React from "react";
import {Link, withRouter} from 'react-router-dom'
// import SignupAPI from "../API/SignupAPI";
import {isAuthenticated} from '../API/SignupAPI'  

const isActive=(history,path)=>{
    if(history?.location.pathname==path){
        return {color:"#ff9900"};
    }
    else{
        return {color:"#ffffff"};
    }

}

const Menu=({history})=>{
    return (
        <>
        <ul className="nav nav-tabs bg-info">
            <li className="nav-item">
                <Link className="nav-link " style={isActive(history,"/")} to="/">Home
                </Link>
            </li>
           {!isAuthenticated()&&(
            <div>
                 <li className="nav-item">
                <Link className="nav-link" style={isActive(history,"/Signin")} to="/Signin">Signin
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history,"/Signup")} to="/Signup">Signup
                </Link>
            </li>
            
            </div>
           )}
           {isAuthenticated() &&(
            <div>
            <li className="nav-item">
                <Link className="nav-link "  style={isActive(history,"/Logout")}  to="/Logout">SignOut
                </Link>
            </li>
            </div>
           )}
           
        </ul>
        </>
    )
}
export default Menu