import { useState } from "react"

export default function ServerlessAddItem(){
    let [ title, setTitle ] = useState('')
    let [ year, setYear ] = useState('')

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
        }
    ]

    let createNewItem = () => {
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies', {
            method: 'POST',
            // headers: {
            //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            //     'Access-Control-Allow-Origin': "*",
            //     'Access-Control-Allow-Credentials': 'true',
            //     'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',

            //     // 'Content-Type': 'application/json'
            // },
            body: {
                "year": year,
                "title": title,
                "copies": 4000
            }
        })
    }

    return(
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
    )
}