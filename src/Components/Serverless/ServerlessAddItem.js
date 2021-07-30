import { Modal, Typography } from "@material-ui/core";
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
            placeholder: "title",
            onChange: (e) => setTitle(e.target.value)
        },
        {
            type: "text",
            value: year,
            placeholder: "year",
            onChange: (e) => setYear(e.target.value)
        }, 
        {
            type: 'text',
            value: copies,
            placeholder: 'copies', 
            onChange: (e) => setCopies(e.target.value)
        }
    ]

    let createNewItem = () => {
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
            method: 'POST',
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
            console.log('Whatever')
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
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
                    <h3>Add item</h3>
                    {
                        inputs.map(input => {
                            return(
                                <input 
                                    type = { input.type }
                                    placeholder = { input.placeholder }
                                    onChange = { input.onChange }
                                    value = { input.value }
                                />
                            )
                        })
                    }
                    <button onClick = {createNewItem}> Add new item</button>
                </div>
            </Modal>
        </div>
    )
}