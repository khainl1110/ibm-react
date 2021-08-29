import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainText: {
        color: theme.palette.secondary.main,
    }, 
    secondaryText: {
        color: theme.palette.primary.main,
    },
    
}))

export default function ServerlessThought() {
    const classes = useStyles();
    return(
        <div id = "architecture">
            <Typography variant = "h3">
                App Architecture
            </Typography>
            <Typography variant = "body2">
                <span className = {classes.secondaryText}><b> API Gateway => AWS Lambda => DynamoDB, S3  </b></span> <br />
                Each method in API Gateway (GET, POST, PUT, DELETE) is mapped to a AWS Lambda function <br />
                Then AWS Lambda makes request to DynamoDB for data<br />
                In order to write to S3 bucket, the app make request to a lambda function to get signedURL, then use that URL to write the file <br />
                So that no AWS Access Key is exposed <br />
                Mapping one API method to one Lambda function give more flexibilities to change each Lambda function without affecting others<br />  
            </Typography>
            <Typography variant = "h6">
                Architecture DynamoDB
            </Typography>
            <Typography variant = "body2">
                MOVIES table with 
                <span className = {classes.secondaryText}><b> year (Number) </b></span> 
                as primary partition key and 
                <span className = {classes.secondaryText}><b> title (String) </b></span> as primary sort key <br />
                MOVIES table has the following String attributes 
                <span className = {classes.secondaryText}><b> year, title, copies, quantity, author </b></span> <br />
                By using year and title as key, we eliminate one column of ID, which is often used for key. In practice, this can remove lots of data redundancy 
            </Typography>
            <Typography variant = "h6">
                Architecture API Gateway
            </Typography>
            <Typography variant = "body2">
                Invoke URL <span className = {classes.mainText}><b><i> https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies </i></b></span><br />
                Body for methods <br />
                <span className = {classes.secondaryText}><b>GET: </b></span>
                (get all movies): No body needed <br />
                <span className = {classes.secondaryText}><b>POST </b></span>
                (create new movie): Required year and title. Value copies is optional <br />
                <span className = {classes.secondaryText}><b>PUT </b></span>
                (update created movie): Required tableName("MOVIES"), year, title, updateTitle(attribute to update), updateValue <br />
                <span className = {classes.secondaryText}><b>DELETE </b></span>
                (delete movie): Required year and title
            </Typography>
            <Typography variant = "h6">
                Architecture S3 bucket
            </Typography>
            <Typography variant = "body2">
                An S3 bucket is used to store movies avatar. For now the bucket is publicly accessible <br />
                The frontend make request to write to API Gateway, which then invoke a Lambda function to get a <span className = {classes.secondaryText}><b>signed URL </b></span><br />
                So that <span className = {classes.secondaryText}><b>no AWS Access Key </b></span>is exposed in the frontend <br />
                Then the frontend write using the url and retrieve through public request
            </Typography>
        </div>
    )
}