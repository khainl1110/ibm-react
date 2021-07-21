import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme)=> ({
    item : {
        padding : theme.spacing(10)
    }
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
            <h3>Details</h3>
            <h3>{movie.year.N}</h3>
            <h3>{movie.title.S}</h3>
            {/* These attributes below might not existed so need to check them first */}
            { movie.copies && <h3>{movie.copies.S}</h3>}
            { movie.quantity && <h3>{movie.quantity.S}</h3>}
            { movie.author && <h3>{movie.author.S}</h3>}
            <h4>Edit below</h4>
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