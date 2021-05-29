import React from 'react';
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: { 
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        color: 'black',
        padding: '0 30px',
        width: 'fit-content'
    }
}

function CustomButton(props) {
    let {classes} = props;
    return <Button className = {classes.root}>{props.text}</Button>
}

CustomButton.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
}

export default withStyles(styles)(CustomButton);