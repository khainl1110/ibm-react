import { Grid, Paper, Typography, Button } from "@material-ui/core"
import { useEffect, useState } from "react"
import ServerlessAddItem from "./ServerlessAddItem";
import ServerlessItem from "./ServerlessItem";
import ServerlessAbout from "./ServerlessAbout";
import ServerlessArchitecture from "./ServerlessArchitecture";
import AutorenewIcon from '@material-ui/icons/Autorenew';

export default function ServerlessIndex() {
    let [movies, setMovies] = useState([])
    let [reload, setReload] = useState(false);
    
    useEffect(() => {
        // fetch this URL will get us all the movies from data.Items
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
        })
            .then(response => response.json())
            .then(data => {
                setMovies(data.Items)
            })
    }, [reload])

    let reloadData = () => {
        setReload(!reload)
    }

    return (
        <Paper>
            <ServerlessAbout />
            <ServerlessAddItem reloadData = {reloadData}/>
            <Typography variant = "h5">Data</Typography>
            <Button 
                startIcon = {<AutorenewIcon />} 
                onClick = {reloadData}
            />
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {
                    movies.map(movie => { 
                        return(
                            <ServerlessItem movie = {movie} reloadData = {reloadData}/>
                        )
                    })
                }
            </Grid>
            <ServerlessArchitecture />
        </Paper>
    )
}