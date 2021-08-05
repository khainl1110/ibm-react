import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    warningText: {
        color: "#ff0000",   
    }
}))

export default function ServerlessAbout() {
    const classes = useStyles();
    return(
        <>
            <Typography variant = "h3">AWS Serverless</Typography>
            <Typography variant = "body1">
                This is a new project with the backend is completely 
                on the cloud using AWS Serverless Suite <br/>
                Serverless Architecture: API Gateway -{'>'} AWS Lambda -{'>'} DynamoDB <br/>
                DynamoDb stores simple MOVIES table data layer, 
                AWS Lambda stores the logic layer while API 
                Gateway is the routing layer <br/>
                Click on Serverless button above the access the app <br />
                The IAM account below has been given permission to view DynamoDB and Lambda function <br />
                URL: https://khainl1110-aws.signin.aws.amazon.com/console/ <br/>
                Username: visitor <br />
                Password: passenger3879!@ <br />
            </Typography>
            <Typography className = {classes.warningText}>
                Update things from this frontend sometimes works, sometimes don't <br />
                But invoke the URL (given below) directly from Postman always works <br />
            </Typography>
        </>
    )
   
}