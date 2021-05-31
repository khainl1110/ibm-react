import { AppBar, Button,Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import Routing from './Routing';
import AppMenu from './NavBar/AppMenu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavBar from './NavBar/NavBar';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import AboutPage from './AboutPage'
import CartPage from './CartPage/CartPage'
import HomePage from './HomePage/HomePage'
import Users from "./UsersPage"

export default function App() {

 
    return(
        <div>
            {/*
                Need to wrap the entire app inside Router
                so that it wont refresh website
            */}
            <Router>
                <NavBar />

                <div>
                    <Switch>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/cart">
                            <CartPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
        
        
    )
}