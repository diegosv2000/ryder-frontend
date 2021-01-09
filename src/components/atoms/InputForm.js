import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    inputContainer:{
        position: 'relative',
        margin: '35px auto 15px 40px',
        width: '100%',
        "& input": {
            display: 'block',
            background: 'none',
            width: '100%',
            border: 'none',
            fontSize: '15px',
            borderBottom: '2px solid #CECECE',
            padding: '10px 0px 5px',
            transition: '.3s',
            color: 'white',
        },
        "& label":{
            position: 'absolute',
            fontSize: '15px',
            transition: '0.5s ease all',
            pointerEvents: 'none',
            color: '#CECECE',
            left: '4px',
            top: '7px',
        },
        "& input:focus":{
            outline: 'none',
            color: '#FFFFFF',
            borderBottom: '2px solid #FFDFFC',
        },
        "& input:focus~label":{
            top: '-10px',
            left: '0',
            fontSize: '12px',
            color: '#FFDFFC',
            textShadow: '0px 0px 5px white',
        },
        "& input:valid~label":{
            top: '-10px',
            left: '0',
            fontSize: '12px',
            color: '#FFDFFC',
        },
    }
    
}))
function InputForm(props){
    const classes = useStyles()
    return (
        <div className={classes.inputContainer}>
            <input type={props.type}  required/>
            <label>{props.label}</label>
        </div>
    );
  

}

export default InputForm;