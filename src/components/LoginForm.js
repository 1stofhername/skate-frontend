export default function LoginForm ({handleEmailChange, handleSubmit, handlePasswordChange, error}) {
    
    return (
        <form className="form" id="login-form" onSubmit={handleSubmit}>
            <div className='form-fields-container'>
                <input type="text" name="email" placeholder="email" onChange={handleEmailChange}/>
                <input type="password" name="password" placeholder="password" onChange={handlePasswordChange} />
            </div>
        <div>
            <input className='form-button' type="submit" value="submit" />
        </div>
        {error? <p className='error-message'>{error}</p>:null}
        </form>
    )
}