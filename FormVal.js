import React, { Component } from "react";
import './App.css';

class FormVal extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            login: '',
            password: '',
            loginValid: true,
            passwordValid: true
        })
    }
    loginCheck = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value,
            loginValid: this.isLoginValid (target.value)
        });
    }    
    passwordCheck = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value,
            passwordValid: this.isPasswordValid (target.value)
        });
    }
    isLoginValid = (login) => (login.length>2);
    isPasswordValid = (password) => (password.length>7);

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.isLoginValid(this.state.login) ||
            !this.isPasswordValid(this.state.password))
                alert('Form fields are incorrect');
            else
                alert('Form field correct');
    }
    constructor(props){
        super(props);
        this.state={
            login:'', 
            password:'',
            loginValid: true,
            passwordValid:true
        }
    }
    render(){
        console.log("loginValid: ", this.state.loginValid);
        console.log("passwordValid: ", this.state.passwordValid);
        let loginError = (this.state.loginValid) 
            ? ''
            : <div className="error">Login not valid</div>
        let passwordError = (this.state.passwordValid) 
            ? ''
            : <div className="error">password not valid</div>    
        return(
            <div className="FormVal">
                <header className="FormVal-App">
                    <h1 className="FormVal-title">Login Form</h1>
                </header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div><label>Login</label></div>
                        {loginError}
                        <div>  
                            <input type="text" name="login" onBlur={this.loginCheck}/>
                        </div>
                        <div><label>password</label></div>
                        {passwordError}
                        <div>  
                            <input type="text" name="password" onBlur={this.passwordCheck}/>
                        </div>
                        <div><input type="submit" value="Login"/></div>
                    </form>
                </div>
                <div>Login: {this.state.login}, password: {this.state.password}</div>
            </div>
        );
    }

}
export default FormVal;