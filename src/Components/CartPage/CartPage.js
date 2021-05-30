import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

export default function CartPage() {
    let {value, value2} = useContext(AppContext)
    let [cart, setCart] = value2;

    return(
        <div>
            <h1>Cart page</h1>
            <p>{cart.length}</p>
            {
                cart.map(item => <h1>{item.id} and {item.quantity}</h1>)
            }
        </div>
        
    )
}