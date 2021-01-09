import React from 'react'
import InputForm from './../atoms/InputForm'
import ButtonForm from './../atoms/ButtonForm'
import TextInOrUp from './../atoms/TextInOrUp'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    signUpForm :{
        border: '1px solid #FFDFFC',
        width: '100%',
        height: '100%',
        borderRadius:'3%',
        background: 'rgb(48,48,48,0.3)',
        backdropFilter: 'blur(5px)',
        textAlign: 'center',

    },
    contInpForm:{
        width:'75%',
        margin: '10px 5px',
    },
    subtitle: {
        color:'#FFDFFC',
        fontSize: '30px',
        margin: '30px 0 10px',
    },
    contButton: {
        margin: '25px 0',
    },
    textInOrUp:{
        margin: '0 auto',
        display:'flex',
        width:'75%',
        justifyContent: 'space-between',
        position:'relative',
        top: '-10px',
        fontSize:'14px'
    }
}))

function SignUpForm(props){
    
    const classes = useStyles()
    
    return(
        <form className={classes.signUpForm}>
            <h2 className={classes.subtitle}>Sign Up</h2>
            
            <div className={classes.contInpForm}>
                <InputForm type="text" label="Nickname" />
            </div>
            <div className={classes.contInpForm}>
                <InputForm type="email" label="Email" />
            </div>
            <div className={classes.contInpForm}>
                <InputForm type="password" label="Password" />
            </div>
            <div className={classes.textInOrUp}>
                <TextInOrUp 
                    text="Are you already registered?"
                    inOrUp="Sign in now"
                    change={props.change}
                />
            </div>
            <div className={classes.contButton}>
                <ButtonForm buttonName="Sign Up" />
            </div>
        </form>
    )
}
export default SignUpForm