import { useState } from 'react';

export default function SignUp ({ validate, errors, setErrors, handleSignUp }){

    const categories = ["skateboard", "scooter", "inline skates", "rollerskates", "other"]
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [category, setCategory]=useState("skateboard");
    

    function onSignUpFormSubmit (e) {
        e.preventDefault();
        const formData = { "first_name": firstName, "last_name": lastName, "email": email, "category": category, "password": password };
        setErrors([]);
        validate(formData);
        if (errors.length === 0) {
            handleSignUp(formData)
        }
    }

    // function validate (data) {
    //     for (const property in data) {
    //         if(property !== 'email') {
    //             if(data[property]){
    //             console.log('yes')
    //         } else {
    //             handleInvalidInput(property)
    //         } } else {
    //             if (data[property] && data[property].includes('@')){
    //                 console.log('yes')
    //             } else {
    //                 handleInvalidInput(property)
    //             }
    //         }
    //     }
    // }

    // function handleInvalidInput (value) {
    //         const text = value.replace('_', ' ');
    //         errorArray.push(`Invalid ${text}`);
    //         setErrors(errorArray)
    //     }
    

    function handleFirstNameChange (e) {
        setFirstName(e.target.value);
        console.log(firstName);
    }

    function handleLastNameChange (e) {
        setLastName(e.target.value);
        console.log(lastName);
    }

    function handleEmailChange (e) {
        setEmail(e.target.value);
        console.log(email);
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value);
    }

    function handleCategoryChange (e) {
        setCategory(e.target.value);
        console.log(category)
    }

    return (
        <div className="popover" id="sign-up">
            <h2>Sign Up</h2>
            <form className="sign-up" name="sign-up" onSubmit={onSignUpFormSubmit}>
                <span className="user-info">
                    <label>
                        First Name:
                        <input type="text" id="first_name" placeholder="Chaka" value={firstName} onChange={handleFirstNameChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" id="last_name" placeholder="Zulu" value={lastName} onChange={handleLastNameChange} />
                    </label>
                    <label>
                        Email:
                        <input type="text" id="email" placeholder="ChakaZulu@email.com" value={email} onChange={handleEmailChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    </label>
                </span>
                <span className="category-form">
                    <select>{categories.map(option=>(<option key={option} id={option} value={category} name="category" onChange={handleCategoryChange}>{option}</option>))}
                    </select>
                </span>
                <button type="submit">Create</button>
            </form>
            {errors.length > 0 
              ? errors.map(error=><p key={error} style={{ color: "red" }}>
                {error}
                </p>)
                
              : null}
        </div>
    )
}