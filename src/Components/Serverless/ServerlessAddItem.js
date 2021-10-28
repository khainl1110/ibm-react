import { Modal, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState, useRef } from "react";
import S3 from "react-aws-s3";
import axios from 'axios';

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
export default function ServerlessAddItem({reloadData}){
    const classes = useStyles();

    // properties for tracking modal
    let [ open, setOpen ] = useState(false);

    // input fields properties
    let [ title, setTitle ] = useState('')
    let [ year, setYear ] = useState('')
    let [ copies, setCopies ] = useState('')

    // file input for uploading
    const [selectedFile, setSelectedFile] = useState(null);

    // input form
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
            label: 'copies', 
            onChange: (e) => setCopies(e.target.value)
        },
    ]
    const handleFileInput = (e) => setSelectedFile(e.target.files[0]);

    let controlCreateNewItem = () => {
        createNewItem();
    }
    let createNewItem = () => {
        uploadFile(selectedFile);

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
                    "copies": copies,
                    "avatarFileName": selectedFile.name
                })
            })
            .then(data => {
                if(data.status === 200) {
                    reloadData()
                    setTitle('')
                    setYear('')
                    setCopies('')
                    setOpen(false)
                }
                else 
                    alert("Error")
            })
            .catch(err => console.log(err))
        }
    }

    // for when adding new movies without pictures, still working on it
    let createNewItemWithoutFile = () => {
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
                    "copies": copies,
                    "avatarFileName": null // cannot have null, but other value this will have bugs
                })
            })
            .then(data => {
                if(data.status === 200) {
                    reloadData()
                    setTitle('')
                    setYear('')
                    setCopies('')
                    setOpen(false)
                }
                else 
                    alert("Error")
            })
            .catch(err => console.log(err))
        }
    }
    // to upload file
    let uploadFile = (file) => {
        axios.post('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/testS3', {
            "bucket":"khainl1110-serverless",
            "key": "images/avatar/" +file.name,
            "fileType": file.type
        })
        .then(res => {
            console.log(res)
            console.log(res.data.link)
            axios.put(res.data.link,file)
            .then(result => console.log(result))
        })
    }

    return(
        <div>
            <Button 
                href = "#architecture"  
                className = {classes.secondaryText}
            >
                <Typography>
                    Go to architecture
                </Typography>
            </Button>
            {/* this will open/close the modal */}
            <Button 
                type = "button" 
                onClick = {() => setOpen(true)}
                className = {classes.secondaryText}
            >
                <Typography>
                    Add Item
                </Typography>
            </Button>
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
                    <Typography 
                        variant = "h6" 
                        className = {classes.mainText}
                    >
                        Movie avatar
                    </Typography>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input type="file" onChange={handleFileInput}/>
                    </Button>
                    <Button 
                        onClick = {controlCreateNewItem}
                        className = {classes.secondaryText}
                    > 
                    Add new item
                    </Button>
                    <Typography>
                        Note: title and year values are required <br/>
                        No effect if title and year pair already existed <br/>
                        <b> Right now needs to upload a image to work as well </b> <br/>
                        <b> Image name should not have any space in between </b>
                    </Typography>
                </div>
            </Modal>
        </div>
    )
}