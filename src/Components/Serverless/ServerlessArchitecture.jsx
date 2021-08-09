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
                <span className = {classes.secondaryText}><b> API Gateway => AWS Lambda => DynamoDB </b></span> <br />
                Each method in API Gateway (GET, POST, PUT, DELETE) is mapped to a AWS Lambda function <br />
                Then AWS Lambda makes request to DynamoDB <br />
                I'm confident there's a way to map all API Gateway method to one Lambda function <br />
                But I have not figured it out yet but this way give overall more flexibilities to change each Lambda function without affecting others<br />  
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
                <span className = {classes.secondaryText}><b> year, title, copies, quantity, author </b></span>
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
        </div>
    )
}