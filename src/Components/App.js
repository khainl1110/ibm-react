import { AppBar } from '@material-ui/core';
import React from 'react';
import { Link, Router } from 'react-router-dom';
import Routing from './Routing';

export default function App() {
    return(
        <div>
            <AppBar position = "static">
                <nav>
                    <ul>
                        <li>
                            <a href = "/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/users">Users</a>
                        </li>
                    </ul>
                </nav>
            </AppBar>
            <Routing />
        </div>
        
        
    )
}