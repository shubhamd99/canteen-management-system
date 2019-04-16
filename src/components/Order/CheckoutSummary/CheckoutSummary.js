import React from 'react';

import Burger from '../../Burger/Burger';
import { Button } from 'react-bootstrap';
import './CheckoutSummary.css';

const checkoutSummary = (props) =>  {
    return (
        <div className='CheckoutSummary'>
            <h2>We hopes it tastes better!!</h2>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <div className='Button'> 
                <Button variant="danger" onClick={props.checkoutCancelled}>CANCEL</Button>
                <Button variant="success" onClick={props.checkoutContinued}>CONTINUE</Button>
            </div>
        </div>
    );
}

export default checkoutSummary;