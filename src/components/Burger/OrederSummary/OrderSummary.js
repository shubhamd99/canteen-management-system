import React from 'react';

import Aux from '../../../hoc/Auxx/Auxx';
import { Button } from 'react-bootstrap';
import './OrderSummary.css';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
                   <span styel={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients..</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: Rs. {props.price.toFixed(2)} /-</strong></p>
            <p>Continue to checkout?</p>
            <div className='Button'> 
                <Button variant="danger" onClick={props.purchaseCancelled}>CANCEL</Button>
                <Button variant="success" onClick={props.purchaseContinued}>CONTINUE</Button>
            </div>
        </Aux>
    );
};

export default orderSummary;