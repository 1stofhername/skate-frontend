import { useState } from 'react';

export default function SignUp ({ validate, errors, setErrors, handleSignUp, handleSignUpCancel, isLoggingIn }) {

    const [formData, setFormData] = useState({
        first_name:null,
        last_name:null,
        email:null,
        password:null
    })

    function onSignUpFormSubmit (e) {
        e.preventDefault();
        setErrors([]);
        validate(formData);
        if (errors.length === 0) {
            handleSignUp(formData)
        }
    }

    function handleFormChange (e) {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({...formData, [name]:value})
        console.log(formData)
    };

    function onCancelClick (e){
        e.preventDefault();
        handleSignUpCancel();
    }

    return (
        <div className="popover" id="sign-up">
            <div className='elements-container'>
            <h2>Sign Up</h2>
            <form className="sign-up" name="sign-up" onSubmit={onSignUpFormSubmit}>
                <span className="user-info">
                    <label>
                        First Name:
                        <input type="text" name="first_name" id="first_name" placeholder="Chaka" value={formData.first_name} onChange={handleFormChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last_name" id="last_name" placeholder="Zulu" value={formData.last_name} onChange={handleFormChange} />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" id="email" placeholder="ChakaZulu@email.com" value={formData.email} onChange={handleFormChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleFormChange} />
                    </label>
                </span>
                <button type="submit">Create</button>
                <button onClick={onCancelClick}>Cancel</button>
            </form>
            <p>Already have an account? Login.</p>
            {errors.length > 0 
              ? errors.map(error=><p className="error-message" key={error}>
                {error}
                </p>)
                
              : null}
              </div>
        </div>
    )
}