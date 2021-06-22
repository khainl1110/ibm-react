import React, { useState } from 'react';

export default function TestingApp() {
    // the testing app is to learn testing, it doesnt have any real function
    let [buttonColor, setButtonColor] = useState('red');
    let newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
    let [disabled, setDisabled] = useState(false);

    return (
        <div>
            <button 
                style = {{backgroundColor: buttonColor}}
                onClick = {() => setButtonColor(newButtonColor)}
                disabled = {disabled}
            >Changed to {newButtonColor}</button>
            <input type = "checkbox" onClick = {(e) => {setDisabled(e.target.checked)}}/>
        </div>
    );
}