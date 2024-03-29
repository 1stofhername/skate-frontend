import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useState } from 'react';
import '../css/login.css';

export default function Login ({ handleLogin, onSignUpClick, error, isLoggingIn, handleLoginClick, isSigningUp,  validate, errors, setErrors, handleSignUp }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit (e) {
        e.preventDefault();
        handleLogin({email:`${email}`, password:`${password}`})
    }

    function handleEmailChange (e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value);
    }

    function onLoginClick (e){
        e.preventDefault();
        handleLoginClick();
    }

    return (
        <div className='login-page'>
            <div className='login-container'>
                <div className='image-container'>
                </div>
                <div className='form-container'>
                    <div className='form header'>
                        <h2>Skate.</h2>
                        <div className='form-toggle-button-container'>
                            <button className='form-button' onClick={onLoginClick} id={isLoggingIn?"selected":null}>Login</button>
                            <button className='form-button' onClick={onSignUpClick} id={isSigningUp?"selected":null}>Sign Up</button>
                        </div>
                    </div>
                    {isLoggingIn ? <LoginForm handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} handlePasswordChange={handlePasswordChange} error={error}/>: <SignUpForm  validate={validate} errors={errors} setErrors={setErrors} handleSignUp={handleSignUp}
          handleLoginClick={handleLoginClick} />}
                </div>
            </div>
        </div>
    )
}