import {Link, Menu, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';

export default function AppMenu() {

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return(
        // API: https://material-ui.com/components/menus/
        <div>
            <MenuIcon onClick = {handleClick}/>
            
            <Menu
                anchorEl = {anchorEl}
                open = {Boolean(anchorEl)}
                onClose = {handleClose}
            >
                <MenuItem onClick = {handleClose}>
                    <Link href = "/">Home</Link>
                </MenuItem>
                <MenuItem onClick = {handleClose}>
                    <Link href="/about">About</Link>
                </MenuItem>
                <MenuItem onClick = {handleClose}>
                    <Link href="/users">Users</Link>
                </MenuItem>
            </Menu>
        </div>
    )
}