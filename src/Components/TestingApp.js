import React, { useState } from 'react';
import SummaryForm from '../pages/summary/SummaryForm';

export default function TestingApp() {
    // the testing app is to learn testing, it doesnt have any real function
    let [buttonColor, setButtonColor] = useState('red');
    let newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
    let [disabled, setDisabled] = useState(false);

    return (
        <SummaryForm />
    );
}