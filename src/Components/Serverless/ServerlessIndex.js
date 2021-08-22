import { Grid, Paper, Typography, Button, IconButton } from "@material-ui/core"
import { useEffect, useState } from "react"
import ServerlessAddItem from "./ServerlessAddItem";
import ServerlessItem from "./ServerlessItem";
import ServerlessAbout from "./ServerlessAbout";
import ServerlessArchitecture from "./ServerlessArchitecture";
import AutorenewIcon from '@material-ui/icons/Autorenew';

const styles = {
    largeIcon: {
        width: 1000,
        height: 1000,
    },
};

export default function ServerlessIndex() {
    let [movies, setMovies] = useState([])
    let [reload, setReload] = useState(false);
    let [doneLoading, setDoneLoading] = useState(false);
    useEffect(() => {
        // fetch this URL will get us all the movies from data.Items
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
        })
        .then(response => response.json())
        .then(data => {
            setMovies(data.Items)
            setDoneLoading(true)
        })
    }, [reload])

    let reloadData = () => {
        setReload(!reload)
        setDoneLoading(false)
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
            {
                !doneLoading ? 
                <Typography variant = "h1">Loading...</Typography>
                :
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
            }
            <ServerlessArchitecture />
        </Paper>
    )
}