import { useState } from 'react';

export default function SignUp ({ validate, errors, setErrors, handleSignUp, handleSignUpCancel }){

    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    function onSignUpFormSubmit (e) {
        e.preventDefault();
        const formData = { 
            first_name: firstName, 
            last_name: lastName, 
            email: email, 
            password: password
        };
        setErrors([]);
        validate(formData);
        if (errors.length === 0) {
            handleSignUp(formData)
        }
    }

    function handleFormChange (e) {
        let name = e.target.name;
        switch(name) {
            case "first_name":
                setFirstName(e.target.value);
                break;
            case "last_name":
                setLastName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
            case "password":
                setPassword(e.target.value)
                break;
        }
    };

    function onCancelClick (e){
        e.preventDefault();
        handleSignUpCancel();

    }

    return (
        <div className="popover" id="sign-up">
            <h2>Sign Up</h2>
            <form className="sign-up" name="sign-up" onSubmit={onSignUpFormSubmit}>
                <span className="user-info">
                    <label>
                        First Name:
                        <input type="text" name="first_name" id="first_name" placeholder="Chaka" value={firstName} onChange={handleFormChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last_name" id="last_name" placeholder="Zulu" value={lastName} onChange={handleFormChange} />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" id="email" placeholder="ChakaZulu@email.com" value={email} onChange={handleFormChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={handleFormChange} />
                    </label>
                </span>
                {/* <span className="category-form">
                    <select>{categories.map(option=>(<option key={option} id={option} value={category} name="category" onChange={handleCategoryChange}>{option}</option>))}
                    </select>
                </span> */}
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
    )
}