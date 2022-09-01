export default function SignUp (){
    return (
        <div className="popover" id="sign-up">
            <h2>Sign Up</h2>
            <form className="sign-up">
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
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}