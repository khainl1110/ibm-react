import { Typography } from '@material-ui/core';
export default function ServerlessThought() {
    return(
        <div id = "architecture">
            <Typography variant = "h6">
                App Architecture
            </Typography>
            <Typography variant = "h6">
                API Gateway -> AWS Lambda -> DynamoDB <br />
                Each method in API Gateway is mapped to a AWS Lambda function <br />
                I'm confident there's a way to map all API Gateway method to one Lambda function <br />
                But I have not figured it out yet <br />
                Then AWS Lambda makes request to DynamoDB
            </Typography>
            <Typography variant = "h6">
                Architecture DynamoDB
            </Typography>
            <Typography variant = "body2">
                MOVIES table with year and title as part of key <br />
                MOVIES table has the following attributes year, title, copies, quantity, author all String types
            </Typography>
            <Typography variant = "h6">
                Architecture API Gateway
            </Typography>
            <Typography variant = "body2">
                Invoke URL <i> https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies </i> <br />
                Body <br />
                GET: No body needed
                POST(create new movie): body JSON must contains these attributes and value: year, title and copies <br />
                PUT (update created movie): body JSON must contains: tableName("MOVIES"), year, title, updateTitle(attribute to update), updateValue <br />
                DELETE (delete movie): body JSON must contains: year and title

            </Typography>
        </div>
    )
}