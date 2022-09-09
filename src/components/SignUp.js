import { useState } from 'react';

export default function SignUp (){

    const categories = ["skateboard", "scooter", "inline skates", "rollerskates", "other"]
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [category, setCategory]=useState("skateboard");
    const [errors, setErrors] = useState([]);

    function handleCheckInFormSubmit (e) {
        e.preventDefault();
        setErrors("");
        const formData = { "first_name": firstName, "last_name": lastName, "email": email, "category": category };
    
        if (!firstName) {
            setErrors('Enter your first name');
        } else if (!lastName) {
            setErrors('Enter your last name')
        } else if (!email || !(email.includes('@'))) {
            setErrors('Invalid email')
        } else {
            console.log(formData)
        }
    }

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

    function handleCategoryChange (e) {
        setCategory(e.target.value);
        console.log(category)
    }

    return (
        <div className="popover" id="sign-up">
            <h2>Sign Up</h2>
            <form className="sign-up" onSubmit={handleCheckInFormSubmit}>
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
                </span>
                <span className="category-form">
                    <select>{categories.map(option=>(<option key={option} id={option} value={category} name="category" onChange={handleCategoryChange}>{option}</option>))}
                    </select>
                </span>
                <button type="submit">Create</button>
            </form>
            {errors.length > 0 
              ? <p style={{ color: "red" }}>
                {errors}
                </p>
                
              : null}
        </div>
    )
}