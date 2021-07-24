
import { AppBar, Button, Grid, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import AppMenu from './AppMenu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

let useStyles = makeStyles({
    button: {
        color: "white",
    }
})

export default function NavBar() {
    let classes = useStyles()

    return (
        <AppBar position = "static">
            <Toolbar>
                <AppMenu />
                <Grid>
                    <Link to="/cart" className = {classes.button} >
                        <Button
                            color = "inherit"
                            startIcon = {<ShoppingCartIcon />}
                        >
                            Cart
                        </Button>
                    </Link>
                    <Link to ="/serverless" className = {classes.button}>
                        <Button
                            color = "inherit"
                        >
                        Serverless
                        </Button>
                    </Link>
                </Grid>
                
            </Toolbar>
        </AppBar>
    )
}