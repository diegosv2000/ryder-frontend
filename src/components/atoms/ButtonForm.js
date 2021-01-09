import React from 'react'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    buttonF:{
        border: '1px solid #FFDFFC',
        backgroundColor: 'transparent',
        padding: '10px 35px',
        fontSize: '18px',
        color:'#FFDFFC',
        transition: '.4s',
        borderRadius: '5px',
        '&:hover':{
            border: '1px solid white',
            color:'white',
            cursor: 'pointer',
            backgroundColor: 'rgb(255,223,252,0.3)'
        },
    }
}))



function ButtonForm(props){
    const classes = useStyles()
    return (
        <button className={classes.buttonF} onClick={props.click}>{props.buttonName}</button>
    )
    
}

export default ButtonForm;
