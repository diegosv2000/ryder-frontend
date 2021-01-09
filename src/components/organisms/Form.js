import React from 'react'
import SignInForm from './SignInForm'
import SignUpForm from "./SignUpForm";


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            registered : true
        }
        this.changeState = this.changeState.bind(this)
    }
    changeState(){
        this.setState({registered: !this.state.registered})
    }
    render(){
        return (
            <React.Fragment>
                {
                (this.state.registered)
                ?<SignInForm change={this.changeState}/>
                :<SignUpForm change={this.changeState}/>
                }
            </React.Fragment>
        );
    }
}

export default Form
