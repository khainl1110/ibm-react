import { Modal, Typography, TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { serverlessURL } from './constants';

const useStyles = makeStyles((theme)=> ({
    mainText: {
        color: theme.palette.secondary.main,
    }, 
    secondaryText: {
        color: theme.palette.primary.main,
    },
    warningText: {
        color: theme.palette.warning.dark,
    },
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '30%',
        left: '30%'
    },
}))

export default function ServerlessDelete({movie, reloadData}) {
    const classes = useStyles();

    let [ open, setOpen ] = useState(false);

    let deleteImageFromS3 = async (fileName) => {
        axios.post(serverlessURL+'testS3', {
            "bucket":"khainl1110-serverless",
            "key": "images/avatar/" +fileName,
            "fileType": file.type
        })
        .then(res => {
            console.log(res)
            console.log(res.data.link)
            axios.delete(res.data.link,fileName)
            .then(result => console.log(result))
        })
    }
    let deleteItem = async () => {
        await fetch(serverlessURL+'movies', {
        method: 'DELETE',
        body: JSON.stringify({
            "tableName": "MOVIES",
            "year": movie.year.N,
            "title": movie.title.S
        })
        })
        .then(response => {
            if(response.status !== 200)
                alert("Error deleting item")
            setOpen(false);
            reloadData()
        })
    }
    return(
        <div>
            {/* this will open/close the modal */}
            <Button onClick = {() => setOpen(true)}>
                <Typography className = {classes.warningText}>
                    Delete
                </Typography>
            </Button>
            <Modal
                open = {open}
                onClose = {() => setOpen(false)}
            >
                <div className = {classes.modal}>
                    <Typography variant = "h6">
                        Delete Item ?
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                    <Button
                        startIcon = {<DoneIcon />}
                        className = {classes.mainText}
                        onClick = {deleteItem}
                    >
                        <Typography>
                            Yes
                        </Typography>
                    </Button>
                    <Button
                        startIcon = {<CloseIcon />}
                        className = {classes.secondaryText}
                        onClick = {() => setOpen(false)}
                    >
                        <Typography>
                            No
                        </Typography>
                    </Button>
                    </Grid>
                </div>
            </Modal>
            <Button
                onClick={() => deleteImageFromS3('suicide_squad_2.jpg')}
            >
                Test delete
            </Button>
        </div>
    )
}