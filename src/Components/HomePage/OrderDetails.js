import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import OrderActions from './OrderActions'

const useStyles = makeStyles({
    name: {
        color: '#f73378',
    },
    description: {
        maxWidth: 250,
    }
})

export default function OrderDetails(props) {
    const classes = useStyles()
    let {_, name, description, price, id} = props.order;
    let {value, value2} = useContext(AppContext)
    let [cart, setCart] = value2;


    let handleClick = () => {
        alert("test")
    }

    return (
        <Grid
            item container
            direction="column"
            justify="center"
            alignItems="flex-start"
        >
            <Typography className = {classes.name} variant = "h5">{name}</Typography>
            <Typography className = {classes.description}>{description}</Typography>
            <Typography variant = "h6">${price}</Typography>
            <Grid item >
                <OrderActions id = {id}  />
            </Grid>
        </Grid>
    )
}