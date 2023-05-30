import { useState } from 'react';

export default function SignUp ({ validate, errors, setErrors, handleSignUp, handleSignUpCancel }) {

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
            <div className='form-content'>
                <h2>Sign Up</h2>
                <form className="form" name="sign-up" onSubmit={onSignUpFormSubmit}>
                    <span className="input-fields-signup">
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
                        <span className="form-buttons">
                    <button type="submit">Create</button>
                    {/* <button onClick={onCancelClick}>Cancel</button> */}
                    </span>
                    <span>
                    <p>Already have an account? <a onClick={onCancelClick} href="">Login.</a></p>
                    {errors.length > 0 
                    ? errors.map(error=><p className="error-message" key={error}>
                        {error}
                        </p>)
                    : null}
                    </span>
                    </span>
                </form>
                </div>
        </div>
        
    )
}