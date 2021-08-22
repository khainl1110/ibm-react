import { Modal, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState, useRef } from "react";
import S3 from "react-aws-s3";

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
    let fileInput = useRef();

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
                    "copies": copies,
                    "avatarFileName": fileInput.current.files[0].name
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
    let uploadFile = () => {
        console.log(fileInput.current.files[0]);
        let file = fileInput.current.files[0];
        let newFileName = fileInput.current.files[0].name;
        const config = {
            bucketName: "khainl1110-serverless",
            dirName: "/images/avatar",
            region: "us-west-2",
            accessKeyId: "AKIAQH7O2BFE4CJMFQHL",
            secretAccessKey: "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"
        }
        let ReactS3Client = new S3(config);
        ReactS3Client.uploadFile(file, newFileName).then(data => {
            console.log(data);
            if(data.status === 204) {
                console.log("Success")
            } else {
                console.log("Fail")
            }
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
                        <input
                            type="file" ref = {fileInput}
                        />
                    </Button>
                    <Button
                        onClick = {uploadFile}>
                        Test upload
                    </Button>
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