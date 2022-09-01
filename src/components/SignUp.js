import { useState } from 'react';

export default function SignUp (){

    const categories = ["skateboard", "scooter", "inline skates", "rollerskates", "other"]
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [category, setCategory]=useState("");

    const formData = {
        firstname:{firstName},
        last_name:{lastName},
        email:{email},
        category:{category},
        };

    function handleFirstNameChange (e) {
        setFirstName(e.target.value);
        console.log(formData);
    }

    function handleLastNameChange (e) {
        setLastName(e.target.value);
        console.log(formData);
    }

    function handleEmailChange (e) {
        setEmail(e.target.value);
        console.log(formData);
    }

    function handleCategoryChange (e) {
        setCategory(e.target.value);
        console.log(formData);
    }

    console.log(formData);

    return (
        <div className="popover" id="sign-up">
            <h2>Sign Up</h2>
            <form className="sign-up">
                <span className="user-info">
                    <label>
                        First Name:
                        <input type="text" name="first_name" placeholder="Chaka" value={firstName} onChange={handleFirstNameChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last_name" placeholder="Zulu" value={lastName} onChange={handleLastNameChange} />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="ChakaZulu@email.com" value={email} onChange={handleEmailChange} />
                    </label>
                </span>
                <span className="category-form">
                    {categories.map(option=>(<label key={option}><input type="radio" key={option} id={option} value={category} name="category" onChange={handleCategoryChange} />{option}</label>))}
                </span>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}