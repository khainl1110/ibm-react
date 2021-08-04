import { Typography } from '@material-ui/core';
export default function ServerlessThought() {
    return(
        <>
            <Typography variant = "body2">
                Thoughts on AWS: AWS is a very powerful service that enable cloud computing.
                However, I don't really have a use case with their famous EC2 instance <br />
                So I try out their Serverless suite and it's very good.
                However, some documentations are not up to date so it's hard to figure out <br />
                Thoughts on DynamoDB: DynamoDB is very interesting.
                Instead of having a unique key, you can have two keys to be part of unique key <br />
                And instead of doing relational databases, it's better to store anything in one row
            </Typography>
            <Typography variant = "body2">
                Invoke URL <i> https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies </i> <br />
                Body <br />
                GET: No body needed
                POST body JSON must contains these attributes and value: year, title and copies
            </Typography>
        </>
    )
}