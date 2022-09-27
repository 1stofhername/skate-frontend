export default function ProfileBar ({ handleLogout, handleDelete, renderCheckIn, handleCheckout, user, isCheckingIn, isAddingSkatepark, activeSkatepark, activeCategory }) {

    function onCheckout () {
        handleCheckout();
    }

    function onCheckInClick (e) {
        if(!isCheckingIn) {
            renderCheckIn(e)
        }
    }

    function onLogout (e) {
        handleLogout(e)
    }

    function onDeleteClick () {
        const deleteConfirm = window.confirm('Are you sure you want to delete your profile?');
        if (deleteConfirm) {
            handleDelete()
        }
    }

    return (
        <div className="bar" id="profile-bar">
            { user ?
            <div>
            <p>Hello, {user.first_name}!</p> 
                {activeSkatepark?<p>Active at: {activeSkatepark} Riding: {activeCategory}</p>:null}
            </div> :null}
            {!user.checkedIn && !isCheckingIn && !isAddingSkatepark ? <button onClick={onCheckInClick}>CheckIn+</button>:null}
            {user.checkedIn ?
                <button onClick={onCheckout}>Leave</button>:null}
            <button onClick={onLogout}>Logout</button>
            <button onClick={onDeleteClick}>Delete profile</button>
        </div>
    )
}