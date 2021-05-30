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
        let object = cart.find(item => item.id = id)
        let index = cart.indexOf(object)
        
        if(index==-1) {
            let newCart = [...cart]
            alert("item not found")
            newCart.push({id:id, quantity:1})
            setCart(newCart)
        } 
        else {
            let newCart = [...cart]
            alert('item found ' + newCart[index].quantity)
            newCart[index].quantity = cart[index].quantity +1;
            setCart(newCart)
        }
        
    }

    return(
        <Grid item>
            <Button className = {classes.button} onClick = {handleClick}>
                    Buy now
            </Button>
        </Grid>
        
    )
}