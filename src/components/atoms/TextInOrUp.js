import React from 'react'

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    text:{
        color: 'white',
    },
    sign:{
        background:'none',
        border: 'none',
        color: '#95C9FF',
        cursor: 'pointer',
        transition: '.4s',

        "&:hover":{
            color: '#FFFFFF',
        }
    }
}))

function TextInOrUp(props){
    
    const classes = useStyles()
    
    return(

        <React.Fragment>
            <p className={classes.text}>{props.text}</p>
            <button className={classes.sign} onClick={props.change}>{props.inOrUp}</button>
        </React.Fragment>

    )
}
export default TextInOrUp