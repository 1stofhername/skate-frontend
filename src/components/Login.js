import { useState } from 'react';
import '../css/login.css';

export default function Login ({ handleLogin, onSignUpClick, error }) {
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

    return (
        <div className='login-page'>
            <div className='login-container'>
                <div className='image-container'>
                </div>
                <div className='form-container'>
                <form className="form" id="sign-up-form" onSubmit={handleSubmit}>
                    <legend>Login</legend>
                        <div>
                            <input type="text" name="email" placeholder="email" onChange={handleEmailChange}/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="password" onChange={handlePasswordChange} />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                </form>
                <span>
                {/* <button onClick={onSignUpClick}>Sign Up.</button> */}
                </span>
                {error? <p className='error-message'>{error}</p>:null}
                </div>
            </div>
        </div>
    )
}