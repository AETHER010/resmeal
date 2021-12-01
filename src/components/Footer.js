import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <div className="footcontain">
            <ul>
            <li><a href="./">Home</a></li>
            
            <li><a href="./Services">Services</a></li>
            <li><a href="./Contact">Contact</a></li>
            </ul>
            <br/>
            <div className='foot' >
            <p >ALL COPYRIGHT RESERBED TO @RESMEAL</p>
            </div>
            

        </div>
    );
}
export default Footer;