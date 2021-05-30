import {Menu, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import menuLink from '../Data/menuLink'
import { Link } from 'react-router-dom';


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
                {
                    menuLink.map(link => {
                        return(
                            <MenuItem onClick = {handleClose}>
                                <Link to = {link.href}>{link.text}</Link>
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </div>
    )
}