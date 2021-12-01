import React from 'react';
import { InputGroup } from 'react-bootstrap';
import './Services.css';

function Services(){
    return(
        <div className="setcontainer">
            <h4 className='head'>OTHER TYPES OF FOOD</h4>
           <div className='lists'>
            <ul>
                <li><a href='./'>NORTHEN FOOD</a></li>
                <img className='ntg1' src='https://thumbs.dreamstime.com/b/northern-thailand-traditional-foods-northern-thailand-traditional-foods-northern-style-168714186.jpg' alt='ntg'/>
                <img className='ntg1' src='https://thumbs.dreamstime.com/b/grilled-spicy-sausage-dish-ingredients-grilled-spicy-sausage-dish-ingredients-thai-traditinal-northern-foods-local-119740884.jpg' alt='ntg'/>

                <li><a href='./'>INDIAN FOOD</a></li>
                <img className='ntg1' src='https://data.tibettravel.org/assets/images/Tibet-bhutan-tour/indian-food-in-Lhasa.jpg' alt='ntg' />
                <img className='ntg1' src='https://data.tibettravel.org/assets/images/Tibet-bhutan-tour/indian-food-in-Lhasa.jpg' alt='ntg' />
                <li><a href='./'>LOCAL FOOD</a></li>
                <img className='ntg1' src='https://data.tibettravel.org/assets/images/Tibet-bhutan-tour/indian-food-in-Lhasa.jpg' alt='ntg' />
                <img className='ntg1' src='https://data.tibettravel.org/assets/images/Tibet-bhutan-tour/indian-food-in-Lhasa.jpg' alt='ntg' />
                <li><a href='./'>CHINESE FOOD</a></li>
                <img className='ntg1' src='https://data.tibettravel.org/assets/images/Tibet-bhutan-tour/indian-food-in-Lhasa.jpg' alt='ntg' />
                <img className='ntg1' src='https://data.tibettravel.org/assets/images/Tibet-bhutan-tour/indian-food-in-Lhasa.jpg' alt='ntg' />
            </ul>
            </div>
        </div>
    );
}
export default Services;