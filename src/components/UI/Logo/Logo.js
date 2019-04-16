import React from 'react';

import Burgerlogo from '../../../assets/images/burger-logo.jpg';
import './Logo.css';

const logo = (props) => (
    <div className='Logo' style={{height: props.height}}>
        <img src={Burgerlogo} alt='MyBurger' />
    </div>
);

export default logo;