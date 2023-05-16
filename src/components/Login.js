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
            <div className='form-container'>
                <form className="form" id="sign-up-form" onSubmit={handleSubmit}>
                <legend>Login</legend>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" placeholder="Email" onChange={handleEmailChange}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} />
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
    )
}