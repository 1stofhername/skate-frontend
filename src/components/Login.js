import { useState } from 'react';
import '../css/login.css';

export default function Login ({ handleLogin, onSignUpClick, error, isLoggingIn }) {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({
        first_name:null,
        last_name:null,
        email:null,
        password:null
    })


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
        <div className='pop-over'>
            <div className='elements-container'>
                <div className='image-container'>
                </div>
                <div className='form-container'>
                <form className="form" id="sign-up-form" onSubmit={handleSubmit}>
                    <legend>Skate.</legend>
                    <div className='toggle-buttons-container'>
                        <button className='form-button'>Login</button>
                        <button className='form-button' onClick={onSignUpClick}>Sign Up</button>
                    </div>
                    <div className='form-fields-container'>
                        <input type="text" name="first_name" id="first_name" placeholder="Chaka" value={formData.first_name} onChange={handleFormChange} />
                        <input type="text" name="email" placeholder="email" onChange={handleEmailChange}/>
                    
                        <input type="password" name="password" placeholder="password" onChange={handlePasswordChange} />
                    </div>
                    <div>
                        <input className='form-button' type="submit" value="submit" />
                    </div>
                    {error? <p className='error-message'>{error}</p>:null}
                </form>
                <span>
                {/* <button onClick={onSignUpClick}>Sign Up.</button> */}
                </span>
                
                </div>
            </div>
        </div>
    )
}