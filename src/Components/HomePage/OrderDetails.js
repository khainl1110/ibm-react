import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CustomButton from './CustomButton';
const useStyles = makeStyles({
    description: {
        maxWidth: 300,
    },
    button: {
        marginTop:40,
        margin: 20
    }
})

export default function OrderDetails(props) {
    const classes = useStyles()
    let {_, name, description, price, id} = props.order;

    return (
        <Grid
            item container
            direction="column"
            justify="center"
            alignItems="flex-start"
        >
            <Typography variant = "h5">{name}</Typography>
            <Typography className = {classes.description}>{description}</Typography>
            <Typography variant = "h6">${price}</Typography>
            <Grid item className = {classes.button}>
                <CustomButton text="Buy now"/>
            </Grid>
        </Grid>
    )
}