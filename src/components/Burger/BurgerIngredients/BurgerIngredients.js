import React, { Component } from 'react';
import PropTypes from 'prop-types';

import burgerImage from '../../../assets/images/burger.png';
import chineeseImage from '../../../assets/images/chineese.png';
import samosaImage from '../../../assets/images/samosa.png';
import cokeImage from '../../../assets/images/coke.png';
import dosaImage from '../../../assets/images/dosa.png';
import pastryImage from '../../../assets/images/pastry.png';

import './BurgerIngredients.css';

class BurgerIngredient extends Component {
    render(){
     
        let ingredient = null;

    switch ( this.props.type ) {

        
        case ('burger'):
           ingredient = <div className='food'><img src={burgerImage} alt='burger' /></div>
           break;

        case ('chineese'):
           ingredient = <div className='food'><img src={chineeseImage} alt='chineese' /></div>
           break;

        case ('coke'):
           ingredient = <div className='food'><img src={cokeImage} alt='coke' /></div>
           break;

        case ('dosa'):
           ingredient = <div className='food'><img src={dosaImage} alt='dosa' /></div>
           break;

        case ('pastry'):
           ingredient = <div className='food'><img src={pastryImage} alt='pastry' /></div>
           break;

        case ('samosa'):
           ingredient = <div className='food'><img src={samosaImage} alt='samosa' /></div>
           break;
    
        default:
            ingredient = null;
        
    }

    return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;