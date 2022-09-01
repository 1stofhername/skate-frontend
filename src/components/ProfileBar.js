
export default function ProfileBar ({ handleLogout }) {
    return (
        <div className="bar" id="profile-bar">
            <img src={null} />
            <p>Hello, first_name!</p>
            <p>Skate Park Name</p>
            <p>Rollerskates</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}