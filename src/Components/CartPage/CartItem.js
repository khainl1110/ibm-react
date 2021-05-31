import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'
import orderInfo from '../Data/orderInfo'

const useStyles = makeStyles({
    paper: {
        margin: 10,
    },
    button: {
        background: '#4dabf5',
        borderRadius: 3,
        color: 'white'
    },
    name: {
        color: '#f73378',
    },
})

export default function CartItem(props) {
    const classes = useStyles()
    let {id, quantity} = props.item;
    let item = orderInfo.find(i => i.id == id)
    let {href, name, description, price, _} = item

    return(
        <Paper className = {classes.paper}>
            {
                /*
                    Layout:
                    [Picture] [Order details]
                */
            }
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>
                    <img 
                        src = {href} alt = {name}
                        width = "200" height = "200" />
                </Grid>
                <Grid item>
                    <Typography variant = "h5" className = {classes.name} >
                        {name}
                    </Typography>
                    <Typography>
                        Quantity {quantity}
                    </Typography>
                    <Typography>
                        Price {quantity * price}
                    </Typography>
                    <Button className = {classes.button}>
                        Buy now
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}