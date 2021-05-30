import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Order from './Order';
import AppContext from '../Context/AppContext';
import orderInfo from '../Data/orderInfo';

const useStyles = makeStyles({
    root: {
        background: 'red',
        borderRadius: 10
    },
})

export default function Home() {
    const classes = useStyles();
    let {value, value1} = useContext(AppContext);
    let [test, setTest] = useState(value);
    let [orders, setOrders] = useState(orderInfo)
    return ( 
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                {
                    orders.map(order => {
                        return(
                            <Grid item>
                                <Order order = {order} />
                            </Grid>
                        )
                    })
                }
        </Grid>
    )
    
}