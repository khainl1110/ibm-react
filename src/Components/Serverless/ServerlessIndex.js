import { Grid, Paper, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import ServerlessAddItem from "./ServerlessAddItem";
import ServerlessItem from "./ServerlessItem";
import ServerlessAbout from "./ServerlessAbout";
import ServerlessThought from "./ServerlessThought";

export default function ServerlessIndex() {
    let [movies, setMovies] = useState([])
    
    useEffect(() => {
        // fetch this URL will get us all the movies from data.Items
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
        })
            .then(response => response.json())
            .then(data => {
                setMovies(data.Items)
            })
    }, [])

    return (
        <Paper>
            <ServerlessAbout />
            <ServerlessAddItem />
            <Typography variant = "h5">Data</Typography>
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
            <ServerlessThought />
        </Paper>
    )
}