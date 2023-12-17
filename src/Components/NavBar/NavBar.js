
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
                    <Link to = "/about" className = {classes.button}>
                        <Button
                            color = "inherit"
                        >
                            About
                        </Button>
                    </Link>
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
                    <Link to = "/gitClone" className = {classes.button}>
                        <Button
                            color = "inherit"
                        >
                            Git Clone 
                        </Button>
                    </Link>
                    <Link to = "/thoughts" className = {classes.button}>
                        <Button 
                            color = "inherit"
                        >
                            Thoughts
                        </Button>
                    </Link>
                </Grid>
                
            </Toolbar>
        </AppBar>
    )
}