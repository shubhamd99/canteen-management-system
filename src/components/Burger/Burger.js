import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    /* converting the object into array */

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            
           /* console.log(igKey) // salad, bacon, (2)cheese, (2)meat
            console.log(igKey + i) // salad, salad0,cheese, cheese0, cheese, cheese1..... */

            return <div className='menu' key={igKey + i}><BurgerIngredient key={igKey + i} type={igKey} /></div>;    // internal mapping
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);  // [] staring with inital one

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding Food Items!</p>
    }
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;