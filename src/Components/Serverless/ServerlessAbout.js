export default function ServerlessAbout() {
    return(
        <>
            <h1>AWS Serverless</h1>
            <p>This is a new project with the backend is completely on the cloud using AWS Serverless Suite</p>
            <p>Serverless Architecture: API Gateway -{'>'} AWS Lambda -{'>'} DynamoDB</p>
            <p>DynamoDb stores simple MOVIES table data layer, AWS Lambda stores the logic layer while API 
                Gateway is the routing layer
            </p>
            <p>Click on Serverless button above the access the app</p>
            <p>The IAM account below has been given permission to view DynamoDB and Lambda function</p>
            <p>URL: https://khainl1110-aws.signin.aws.amazon.com/console\</p>
            <p>Username: visitor</p>
            <p>Password: passenger3879!@</p>
        </>
    )
   
}