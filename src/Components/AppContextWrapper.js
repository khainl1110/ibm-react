import React, { useState } from 'react';
import App from './App';
import AppContext from './Context/AppContext';
import LoggedInContext from './Context/LoggedInContext';

export default function AppContextWrapper() {
    let [test, setTest] = useState("test")
    let [cart, setCart] = useState([{id:1, quantity:1}])
    let [loggedIn, setLoggedIn] = useState(false)
    /*
        the cart will have the following structure:
            id and quantity
        
        Pass multiple states to APIContext
        https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react 
    */
   return (
         
        <AppContext.Provider value = {
            {value: [test, setTest]}, 
            {value2: [cart, setCart]}
            }
        >
        <LoggedInContext.Provider value = {{loggedIn, setLoggedIn}}>
           <App />
        </LoggedInContext.Provider>
        </AppContext.Provider>
   )
}