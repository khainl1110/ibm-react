import { Grid, makeStyles, Paper} from '@material-ui/core';
import React from 'react';
import OrderDetails from './OrderDetails';

const useStyles = makeStyles({
    paper: {
        margin: 10,
    },
})

export default function Order(props) {
    const classes = useStyles()
    let {href, name} = props.order;

    return (
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
                    <OrderDetails order = {props.order} />
                </Grid>
            </Grid>
        </Paper>
    )
}