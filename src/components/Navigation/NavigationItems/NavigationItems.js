import React from 'react';

import classes from './NavigationItems.css';
import NavgationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavgationItem link={"/"} active >Burger Builder</NavgationItem>
            <NavgationItem link={"/"} active >Checkout</NavgationItem>
    </ul>
);

export default navigationItems;