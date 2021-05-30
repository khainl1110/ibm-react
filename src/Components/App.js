import { AppBar, Button, Link, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import Routing from './Routing';
import AppMenu from './AppMenu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function App() {

 
    return(
        <div>
            <AppBar position = "static">
                <Toolbar>
                    <AppMenu />
                    <Link href="/cart" color = "inherit">
                        <Button
                            color = "inherit"
                            startIcon = {<ShoppingCartIcon />}
                        >
                            Cart
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Routing />
        </div>
        
        
    )
}