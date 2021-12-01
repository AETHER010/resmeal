import React, { useEffect } from 'react';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Body.css';

import { Link } from 'react-router-dom';


function Body(){
    // const History=useNavigate();

    // function routechange(){
    //     History(<Order/>);

    // }
    
    const[items,setitems]=useState([]);

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>{
            setitems(res.data.meals);
            console.log(res.data);
        }).catch(err=>{

        })
    },[])

    const[meal,setmeal]=useState('');

    const itemslist=items.map((object)=>{
        return(
            <div key={object.idMeal} className='col-md-4'>
                <div className='content'>
                <p>{object.strMeal}</p>
                <img className='imgr' src={object.strMealThumb} className='img-fluid' alt="nothing" />
                {/* <p>{object.idMeal}</p> */}<br/>
                <button className='btn btn-primary' >
                    <Link to={{
                        pathname:`/Order/${object.idMeal}`,
                        state :{Order: object.strMealThumb}
                        }} >ORDER NOW</Link>
                    </button>
                    
                </div>
            </div>
        );
        
    })
    return(
        
        <div>
            <div className='bg-image'></div>
            <div className='row'>
            {itemslist}
            </div>
            
            
        </div>
    );
}
export default Body;