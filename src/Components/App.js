import { AppBar } from '@material-ui/core';
import React, { useState } from 'react';
import AppMenu from './AppMenu';
import AppContext from './Context/AppContext';
import Routing from './Routing';


export default function App() {
    let [test, setTest] = useState("test")

    return(
        <div>
            <AppContext.Provider value = {{value: [test, setTest]}}>
                <AppBar position = "static">
                    <AppMenu />
                </AppBar>
                <Routing />
            </AppContext.Provider>
        </div>
        
        
    )
}