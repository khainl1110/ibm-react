import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import CustomButton from './CustomButton';
import HigherOrderComponent from './HigherOrderComponent';
import { Grid } from '@material-ui/core';
import Order from './Order';

const useStyles = makeStyles({
    root: {
        background: 'red',
        borderRadius: 10
    },
})

export default function Home() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Grid item>
                    <Order />
                </Grid>
                <Grid item>
                    <Order />
                </Grid>
                <Grid item>
                    <Order />
                </Grid>
        </Grid>
    )
    
}