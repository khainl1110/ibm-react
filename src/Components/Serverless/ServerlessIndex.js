import { Grid, Paper } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react"

const useStyles = makeStyles((theme)=> ({
    item : {
        padding : theme.spacing(5)
    }
}))

export default function ServerlessIndex() {
    const classes = useStyles();
    let [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
        })
            .then(response => response.json())
            .then(data => {
                setMovies(data.Items)
                console.log(data.Items)
                console.log("Testing ", data.Items[0].year.N)
            })
    }, [])

    return (
        <Paper>
            <h1>This is serverless app</h1>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {
                    movies.map(movie => { 
                        return(
                            <Grid item className = {classes.item}>

                                <h3>Test {movie.year.N}</h3>
                                <h3>{movie.title.S}</h3>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Paper>
    )
}