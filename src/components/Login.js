import { useState } from 'react';

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
            <div className="popover">
                <h2>Login</h2>
                <form className="form" id="sign-up-form" onSubmit={handleSubmit}>
                    <span className="input-fields">
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="Email" onChange={handleEmailChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} />
                    </label>
                    <input type="submit" value="Login" />
                    </span>
                </form>
                <button onClick={onSignUpClick}>Sign Up.</button>
                {error? <p className='error-message'>{error}</p>:null}
            </div>
        </div>
    )
}