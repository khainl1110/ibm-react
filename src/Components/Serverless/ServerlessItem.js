import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme)=> ({
    item : {
        padding : theme.spacing(5),
        margin: '1em',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        }
    },
}))

export default function ServerlessItem({movie}) {
    const classes = useStyles();
    let [ attribute, setAttribute ] = useState("")
    let [ value, setValue ] = useState(" ")

    let handleAttributeChange = (e) => {
        setAttribute(e.target.value)
    }

    let handleValueChange = (e) => {
        setValue(e.target.value)
    }

    let requestChange = async () => {
        let result = await fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': "*",
            },
            body: {
                "tableName": "MOVIES",
                "year": movie.year.N,
                "title": movie.title.S,
                "updateTitle": attribute,
                "updateValue": value
            }
        })
        console.log(result)
        alert("Attribute changed")
    }
    return(
        <Grid item className = {classes.item}>
            <Typography variant = "h6">Key value</Typography>
            <Typography variant = "h6">Year: {movie.year.N}</Typography>
            <Typography variant = "h6">Movie: {movie.title.S}</Typography>
            {/* These attributes below might not existed so need to check them first */}
            { movie.copies && <Typography>{movie.copies.S}</Typography>}
            { movie.quantity && <Typography>{movie.quantity.S}</Typography>}
            { movie.author && <Typography>{movie.author.S}</Typography>}
            <Typography>Edit below</Typography>
            <input 
                type = "text" 
                placeholder = "attribute"
                value = {attribute}
                onChange = {handleAttributeChange}
            />
            <input 
                type = "text" 
                placeholder = "value" 
                value = {value}
                onChange = {handleValueChange}
            />
            <button onClick = {requestChange}>Confirm</button>
        </Grid>
    )
}