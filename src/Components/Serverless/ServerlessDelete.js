import { Modal, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme)=> ({
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

export default function ServerlessDelete() {
    const classes = useStyles();

    let [ open, setOpen ] = useState(false);

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
                    <h3>Delete Item</h3>
                </div>
            </Modal>
        </div>
    )
}