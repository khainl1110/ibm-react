import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import CartItem from './CartItem';

export default function CartPage() {
    let {value, value2} = useContext(AppContext)
    let [cart, setCart] = value2;

    return(
        <div>
            <h1>Cart page</h1>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {
                    cart.map(item => <CartItem item = {item} />)
                }
            </Grid>
        </div>
        
    )
}