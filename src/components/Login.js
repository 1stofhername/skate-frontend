import { useState } from 'react';

export default function Login ({ handleLogin, handleSignUpClick }) {
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
            <form className="sign-up" onSubmit={handleSubmit}>
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
            <button onClick={handleSignUpClick}>Sign Up.</button>
        </div>
    )
}