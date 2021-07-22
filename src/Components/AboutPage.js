import React from 'react';
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
            <h1>AWS Serverless</h1>
            <p>This is a new project with the backend is complete on the cloud using AWS Serverless Suite</p>
            <p>Serverless Architecture: API Gateway -{'>'} AWS Lambda -{'>'} DynamoDB</p>
            <p>DynamoDb stores simple MOVIES table data layer, AWS Lambda stores the logic layer while API 
                Gateway is the routing layer
            </p>
            <p>Sadly my React app can only get all Movies, other API method got blocked by cors
                and I don't know how to enable them 
            </p>
            <p>Click on Serverless button above the access the app</p>
        </div>
        
    )
}