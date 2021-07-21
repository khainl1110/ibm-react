import { Grid, Paper } from "@material-ui/core"
import { useEffect, useState } from "react"
import ServerlessItem from "./ServerlessItem";

export default function ServerlessIndex() {
    let [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
        })
            .then(response => response.json())
            .then(data => {
                setMovies(data.Items)
                console.log(data.Items)
                console.log(typeof(data.Items))
            })
    }, [])

    return (
        <Paper>
            <h1>Data</h1>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {
                    movies.map(movie => { 
                        return(
                            <ServerlessItem movie = {movie} />
                        )
                    })
                }
            </Grid>
        </Paper>
    )
}