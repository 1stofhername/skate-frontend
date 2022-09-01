export default function Login ({ handleLogin }) {
    return (
        <div className="popover" id="sign-up">
            <h2>Login</h2>
            <form className="sign-up" onSubmit={handleLogin}>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="Email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}