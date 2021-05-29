import { AppBar } from '@material-ui/core';
import React from 'react';
import { Link, Router } from 'react-router-dom';
import AppMenu from './AppMenu';
import Routing from './Routing';

export default function App() {
    return(
        <div>
            <AppBar position = "static">
                <AppMenu />
            </AppBar>
            <Routing />
        </div>
        
        
    )
}