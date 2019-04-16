import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
       <NavigationItem link='/' exact>Burger Builder</NavigationItem> 
       {props.isAuthenticated 
             ? <NavigationItem link='/orders'>Orders</NavigationItem>
             : null
       }
       { !props.isAuthenticated 
             ? <NavigationItem link='/auth'>Log In/ Sign Up</NavigationItem>
             : <NavigationItem link='/logout'>Log Out</NavigationItem> 
        }
    </ul>
);

export default navigationItems;