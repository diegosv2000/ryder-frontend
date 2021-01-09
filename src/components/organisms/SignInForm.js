import React from 'react'
import InputForm from './../atoms/InputForm'
import ButtonForm from './../atoms/ButtonForm'
import TextInOrUp from './../atoms/TextInOrUp'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    signInForm :{
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
        margin: '40px 0'
    },
    contButton: {
        margin: '50px 0',
    },
    textInOrUp:{
        margin: '0 auto',
        display:'flex',
        width:'75%',
        justifyContent: 'space-between',
        position:'relative',
        top: '-10px',
        fontSize: '14px'
    }
}))

function SignInForm(props){
    
    const classes = useStyles()
    
    return(
        <form className={classes.signInForm}>
            <h2 className={classes.subtitle}>Sign In</h2>
            <div className={classes.contInpForm}>
                <InputForm type="email" label="Email" />
            </div>
            <div className={classes.contInpForm}>
                <InputForm type="password" label="Password" />
            </div>
            <div className={classes.textInOrUp}>
                <TextInOrUp 
                    text="Create account now"
                    inOrUp="Create account now"
                    change={props.change}
                />
            </div>
            <div className={classes.contButton}>
                <ButtonForm buttonName="Sign In" />
            </div>
        </form>
    )
}
export default SignInForm