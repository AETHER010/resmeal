import React from 'react';
import './Navbar.css';
import { Form} from "react-bootstrap";


function Navbar(){
    return(
        <div className="navbar">
        <h1>RESMEAL</h1>
        <a href="./" >Home</a>
        <a href="./Services" >Services</a>
        <a href="./Contact" >Contact Us</a>
        </div>
    );
}
export default Navbar;