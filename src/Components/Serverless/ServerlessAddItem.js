import { Modal } from "@material-ui/core";
import { useState } from "react"

export default function ServerlessAddItem(){
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
                Add Item
            </button>
            <Modal
                open = {open}
                onClose = {() => setOpen(false)}
            >
                <>
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
                </>
            </Modal>
        </div>
    )
}