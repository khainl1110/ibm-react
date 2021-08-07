import { Modal, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react"

const useStyles = makeStyles((theme) => ({
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
    mainText: {
        color: theme.palette.secondary.main,
    }, 
    secondaryText: {
        color: theme.palette.primary.main,
    },
}))
export default function ServerlessAddItem(){
    const classes = useStyles();

    // properties for tracking modal
    let [ open, setOpen ] = useState(false);

    // input fields properties
    let [ title, setTitle ] = useState('')
    let [ year, setYear ] = useState('')
    let [ copies, setCopies ] = useState('')

    let inputs = [
        {
            type : "text",
            value: title,
            label: "title",
            onChange: (e) => setTitle(e.target.value)
        },
        {
            type: "text",
            value: year,
            label: "year",
            onChange: (e) => setYear(e.target.value)
        }, 
        {
            type: 'text',
            value: copies,
            label: 'copies, default 1', 
            onChange: (e) => setCopies(e.target.value)
        }
    ]

    let createNewItem = () => {
        if(year && title) {
            fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
                method: 'POST',
                // need headers otherwise it won't accept
                headers: {
                    'Content-Type': 'application/json',
                },
                // need to stringify or it won't work
                body: JSON.stringify({
                    "year": year,
                    "title": title,
                    "copies": copies
                })
            })
            .then(data => {
                if(data.status)
                    alert("Item added")
                else 
                    alert("Error")
                console.log(data)
            })
            .catch(err => console.log(err))
        }
    }

    return(
        <div>
            {/* this will open/close the modal */}
            <button type = "button" onClick = {() => setOpen(true)}>
                <Typography>
                    Add Item
                </Typography>
            </button>
            <Modal
                open = {open}
                onClose = {() => setOpen(false)}
            >
                <div className = {classes.modal}>
                    <Typography 
                        variant = "h5" 
                        className = {classes.mainText}
                    >
                    Add item
                    </Typography>
                    {
                        inputs.map(input => {
                            return(
                                <TextField
                                    type = { input.type }
                                    label = { input.label }
                                    onChange = { input.onChange }
                                    value = { input.value }
                                />
                            )
                        })
                    }
                    <Button 
                        onClick = {createNewItem}
                        className = {classes.secondaryText}
                    > 
                    Add new item
                    </Button>
                    <Typography>
                        Note: title and year values are required <br/>
                        No effect if title and year pair already existed
                    </Typography>
                </div>
            </Modal>
        </div>
    )
}