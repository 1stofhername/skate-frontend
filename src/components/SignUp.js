export default function SignUp (){

    const categories = ["skateboard", "scooter", "inline skates", "rollerskates", "other"]
    const [formData, setFormData] = useState({
        firstname:null,
        last_name:null,
        email:null,
        category:null,
        });

    return (
        <div className="popover" id="sign-up">
            <h2>Sign Up</h2>
            <form className="sign-up">
                <span className="user-info">
                    <label>
                        First Name:
                        <input type="text" name="first_name" placeholder="Chaka" />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last_name" placeholder="Zulu" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="ChakaZulu@email.com" />
                    </label>
                </span>
                <span className="category-form">
                    {categories.map(category=>(<label key={category}><input type="radio" key={category} id={category} value={category} name="category" />{category}</label>))}
                </span>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}