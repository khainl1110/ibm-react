import React from 'react';
import NavBar from './NavBar/NavBar';
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'
import AboutPage from './AboutPage'
import CartPage from './CartPage/CartPage'
import HomePage from './HomePage/HomePage'
import Users from "./UsersPage"
import TestingApp from './TestingApp';
import ServerlessIndex from './Serverless/ServerlessIndex';
import Thoughts from "./Thoughts";

export default function App() {

    /*
        Need to wrap the entire app inside Router
        so that it wont refresh website
        Specific path comes first otherwise "/" will match all of it
    */
    return(
        <Router basename = {process.env.PUBLIC_URL}>
            <NavBar />

            <div>
                <Switch>
                    <Route path = "/testingApp">
                        <TestingApp />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/cart">
                        <CartPage />
                    </Route>
                    <Route path = "/serverless">
                        <ServerlessIndex />
                    </Route>
                    <Route path = "/thoughts">
                        <Thoughts />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
        
        
    )
}