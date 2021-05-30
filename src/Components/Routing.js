import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import AboutPage from './AboutPage'
import CartPage from './CartPage/CartPage'
import HomePage from './HomePage/HomePage'
import Users from "./UsersPage"

export default function Routing() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    )
    
}