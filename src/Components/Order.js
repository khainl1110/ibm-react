import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    paper: {
        margin: 10,
    }
})

export default function Order() {
    const classes = useStyles()
    return (
        <Paper className = {classes.paper}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>
                    <img 
                        src = "https://cdn.pixabay.com/photo/2016/12/14/21/10/mouse-1907494_1280.jpg"
                        width = "200" height = "200" />
                </Grid>
                <Grid item>
                <Grid
                        item container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography> Standard license</Typography>
                        <Typography> Full resolution</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}