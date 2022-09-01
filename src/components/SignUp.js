export default function SignUp (){

    const categories = ["skateboard", "scooter", "inline skates", "rollerskates", "other"]
    const [formData, setFormData] = useState({
        firstname:null,
        last_name:null,
        email:null,
        category:null,
        });

    function handleFormChange (e) {
        console.log(`${e.target.name}: ${e.target.value}`)
    }

    return (
        <div className="popover" id="sign-up">
            <h2>Sign Up</h2>
            <form className="sign-up">
                <span className="user-info">
                    <label>
                        First Name:
                        <input type="text" name="first_name" placeholder="Chaka" onChange={handleFormChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last_name" placeholder="Zulu" onChange={handleFormChange} />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="ChakaZulu@email.com" onChange={handleFormChange} />
                    </label>
                </span>
                <span className="category-form">
                    {categories.map(category=>(<label key={category}><input type="radio" key={category} id={category} value={category} name="category" onChange={handleFormChange} />{category}</label>))}
                </span>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}