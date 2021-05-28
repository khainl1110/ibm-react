import React from 'react';
import Button from '@material-ui/core/Button'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'

export default function Home() {
    return (
        <div>
            <Button>Hello</Button>
            <Button variant="contained" color="secondary" startIcon= {<AddAPhotoIcon />}>Secondary</Button>

        </div>
    )
    
}