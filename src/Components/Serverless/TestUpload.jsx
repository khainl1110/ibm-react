import {useState} from 'react';
import axios from 'axios';

export default function TestUpload() {
    // https://javascript.plainenglish.io/how-to-access-private-s3-buckets-securely-87778efd93bd
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => setSelectedFile(e.target.files[0]);

    const uploadFile = (file) => {
        axios.post('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/testS3', {
            "bucket":"khainl1110-serverless",
            "key": file.name,
            "fileType": file.type
        })
        .then(res => {
            console.log(res)
            console.log(res.data.link)
            // axios.put(res.data.link, file)
            axios.put(res.data.link,file)
            .then(result => console.log(result))
        })
    }


    return <>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
        <img src = "https://khainl1110-serverless.s3.us-west-2.amazonaws.com/rabbitInAHat.jpg"/>
    </>
}