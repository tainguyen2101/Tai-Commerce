import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, ToolBar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    

    return (
        <>
           <AppBar position="fixed" className={classes.AppBar} color="inherit">
               <Toolbar>
                    <Typography component={Link} to="/">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Tai Commerce
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' ? (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                    ) : null }
               </Toolbar>
               </AppBar> 
        </>
    )
}

export default Navbar;
