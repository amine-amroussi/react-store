import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth , CreateUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName : '',
            email : '',
            password : '' ,
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName , email , password , confirmPassword} = this.state;

        if (password != confirmPassword) {
            alert("The Password is not match ");
            return;
        }

        try {
            const {user} = auth.createUserWithEmailAndPassword(email , password);
            await CreateUserProfileDocument(user , { displayName });

            this.setState({
                displayName : '',
                email : '',
                password : '' ,
                confirmPassword : ''
            })

        } catch (error) {
            console.error(error.message);
        }

    }

    HandleChange = event => {
        const {name , value} = event.target;

        this.setState({[name] : value})
    }

    render(){
        const {displayName , email , password , confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account !</h2>
                <span className="subtitle">Sign up with your email and password </span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput 
                    type="text"
                    name = "displayName"
                    value = {displayName}
                    onChange = {this.HandleChange}
                    label = "Display Name"
                    required
                    />

                    <FormInput 
                    type="email"
                    name = "email"
                    value = {email}
                    onChange = {this.HandleChange}
                    label = "Email"
                    required
                    />

                    <FormInput 
                    type="password"
                    name = "password"
                    value = {password}
                    onChange = {this.HandleChange}
                    label = "Password"
                    required
                    />

                    <FormInput 
                    type="password"
                    name = "confirmPassword"
                    value = {confirmPassword}
                    onChange = {this.HandleChange}
                    label = "Confirm Passsword"
                    required
                    />
                    <CustomButton type="submit"> SIGNUP </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;