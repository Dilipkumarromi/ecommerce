import React from "react";
import {Link, withRouter} from 'react-router-dom'

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
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history,"/")} to="/Signin">Signin
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history,"/Signup")} to="/Signup">Signup
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/Home">Home
                </Link>
            </li>
        </ul>
        </>
    )
}
export default Menu