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
            <div id="user-details">
            <p className="greeting">Hello, {user.first_name}!</p> 
                {activeSkatepark?<p className="active-info">Active at: {activeSkatepark} Riding: {activeCategory}</p>:null}
            </div> :null}
            <div className="buttons-container">
                {!user.checkedIn && !isCheckingIn && !isAddingSkatepark ? <button onClick={onCheckInClick}>CheckIn+</button>:null}
                {user.checkedIn ?
                    <button onClick={onCheckout}>Leave</button>:null}
                <button className='delete' onClick={onDeleteClick}>Delete profile</button>
                <button className='logout' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}