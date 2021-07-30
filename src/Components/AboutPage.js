import React from 'react';
import ServerlessAbout from "./Serverless/ServerlessAbout";
export default function AboutPage() {
    return (
        <div>
            <h1>A new way to shop</h1>
            <p> This project uses</p>
            <ul>
                <li> React and Material Design</li>
                <li> Advanced knowledge in React such as useState, useContext</li>
                <li> Advanced knowledge in Material Design like theme API</li>
                <li> Software engineer concepts such as low coupling, high cohesion for organizing code</li>
            </ul>
            <p>Github: @khainl1110</p>
            <ServerlessAbout />
        </div>
        
    )
}
