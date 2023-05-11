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
        <div className="popover" id="sign-up">
            <h2>Login</h2>
            <form className="form" id="sign-up-form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="Email" onChange={handleEmailChange}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} />
                </label>
                <input type="submit" value="Login" />
            </form>
            <button onClick={onSignUpClick}>Sign Up.</button>
            {error? <p className='error-message'>{error}</p>:null}
        </div>
    )
}