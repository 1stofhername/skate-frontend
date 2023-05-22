import { useState } from 'react';

export default function SignUp ({ validate, errors, setErrors, handleSignUp, handleLoginClick }) {

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

    return (
        
            <form className="sign-up" name="sign-up" onSubmit={onSignUpFormSubmit}>
                <div className='form-fields-container'>  
                    <input type="text" name="first_name" id="first_name" placeholder="first name" value={formData.first_name} onChange={handleFormChange} />
                    <input type="text" name="last_name" id="last_name" placeholder="last name" value={formData.last_name} onChange={handleFormChange} />
                    <input type="text" name="email" id="email" placeholder="email" value={formData.email} onChange={handleFormChange} />
                    <input type="password" name="password" id="password" placeholder="password" value={formData.password} onChange={handleFormChange} />
                </div>

                <button type="submit">Create</button>
                {errors.length > 0 
              ? errors.map(error=><p className="error-message" key={error}>
                {error}
                </p>)
                
              : null}
            </form>

    )
}