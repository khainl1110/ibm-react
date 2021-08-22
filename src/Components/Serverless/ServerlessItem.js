import { Grid, Paper, Typography, TextField, Button, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';
import ServerlessDelete from './ServerlessDelete';

const useStyles = makeStyles((theme)=> ({
    paper: {
        margin: 10,
        '&:hover': {
            backgroundColor: '#dbdbdb',
        },
    }, 
    item : {
        padding : theme.spacing(5),
        margin: '1em',
    },
    mainText: {
        color: theme.palette.secondary.main,
    }, 
    secondaryText: {
        color: theme.palette.primary.main,
    },
    warningText: {
        color: theme.palette.warning.dark,
    }
}))

export default function ServerlessItem({ movie, reloadData }) {
    const classes = useStyles();
    let [ attribute, setAttribute ] = useState("")
    let [ value, setValue ] = useState("")

    let [ keys, setKeys ] = useState([])

    // working to loop through every key in object
    // still in progress
    // useEffect(()=> {
    //     const keys = Object.keys(movie);
    //     // keys.forEach((key, index) => {
    //     //     console.log(key + " and " + index);
    //     // }) 
    //     setKeys(keys);
    // }, [])

    let handleAttributeChange = (e) => {
        setAttribute(e.target.value)
    }

    let handleValueChange = (e) => {
        setValue(e.target.value)
    }

    let requestChange = async () => {
        if(attribute && value) {
            await fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
            method: 'PUT',
            body: JSON.stringify({
                "tableName": "MOVIES",
                "year": movie.year.N,
                "title": movie.title.S,
                "updateTitle": attribute,
                "updateValue": value
            })
            })
            .then(data => {
                if(data.status !== 200)
                    alert(data.errorMessage)
                else 
                    reloadData()
            })
        }
    }
    return(
        <Paper className = {classes.paper}>
            <Grid item className = {classes.item}>
                <Typography 
                    variant = "h6"
                    className = {classes.mainText}
                >
                year: {movie.year.N}
                </Typography>
                <Grid 
                    item container 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    <Typography 
                        variant = "h6"
                        className = {classes.mainText}
                    >
                    movie: {movie.title.S}
                    </Typography>
                    {/* passing props around here, might be able to improve */}
                    <ServerlessDelete movie = {movie} reloadData = {reloadData}/>
                </Grid>
                {/* These attributes below might not existed so need to check them first */}
                { movie.copies && <Typography>copies: {movie.copies.S}</Typography>}
                { movie.quantity && <Typography>quantity: {movie.quantity.S}</Typography>}
                { movie.author && <Typography>author: {movie.author.S}</Typography>}
                { movie.avatarFileName && <img width = "100" height = "100"
                src = {new String('http://khainl1110-serverless.s3-website-us-west-2.amazonaws.com/images/avatar/' +movie.avatarFileName.S)}/>
                }
                <Typography className = {classes.secondaryText}>Edit below</Typography>
                <TextField
                    type = "text" 
                    label = "attribute"
                    value = {attribute}
                    onChange = {handleAttributeChange}
                />
                <TextField 
                    id="standard-basic"
                    type = "text" 
                    label="value"  
                    value = {value}
                    onChange = {handleValueChange}
                />
                <Button 
                    className = {classes.secondaryText}
                    onClick = {requestChange}
                >
                Confirm
                </Button>
                <Typography>
                    Can only change values that are not part of key (Year, Movie) <br />
                    For ex, copies, quantity, author <br />
                    No capitalize first word to match the database rows
                </Typography>
            </Grid>
        </Paper>
    )
}