import { Typography } from '@material-ui/core';
export default function ServerlessThought() {
    return(
        <>
            <Typography variant = "h6">
                Thoughts on AWS: 
            </Typography>
            <Typography variant = "body2">
                AWS is a very powerful service that enable cloud computing.
                However, I don't really have a use case with their famous EC2 instance <br />
                So I try out their Serverless suite and it's very good.
                However, some documentations are not up to date so it's hard to figure out <br />
                Thoughts on DynamoDB: DynamoDB is very interesting.
                Instead of having a unique key, you can have two keys to be part of unique key <br />
                And instead of doing relational databases, it's better to store anything in one row
            </Typography>
            <Typography variant = "h6">
                Architecture DynamoDB
            </Typography>
            <Typography variant = "body2">
                MOVIES table with year and title as part of key
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
        </>
    )
}