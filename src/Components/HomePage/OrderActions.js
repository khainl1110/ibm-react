import { Button, Grid, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';

const useStyles = makeStyles({
    button: {
        background: '#4dabf5',
        borderRadius: 3,
        color: 'white'
    }
})

export default function OrderActions(props) {
    let classes = useStyles()
    let {value, value2} = useContext(AppContext)
    let [cart, setCart] = value2;
    let id = props.id;

    let handleClick = () => {
        /*  how to find item
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        */
        let object = cart.find(item => item.id == id)
        let index = cart.indexOf(object)

        let newCart = [...cart]
        if(index==-1) 
            newCart.push({id, quantity:1})
        else 
            newCart[index].quantity = cart[index].quantity +1;
        setCart(newCart)
        alert("Added")
        
    }

    return(
        <Grid item>
            <Button className = {classes.button} onClick = {handleClick}>
                    Add to cart
            </Button>
        </Grid>
        
    )
}