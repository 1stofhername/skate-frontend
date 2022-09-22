import { useState } from 'react';
import { CheckIn } from "./CheckIn";

export default function ProfileBar ({ handleLogout, handleDelete, renderCheckIn, handleCheckout, user, isCheckingIn, activeSkatepark, activeCategory }) {

    console.log(`checkin: ${user.checkedIn}`)
    console.log(`cat ${activeCategory}, park ${activeSkatepark}`)
    function onCheckout () {
        handleCheckout();
    }

    function onCheckInClick (e) {
        renderCheckIn(e)
    }

    function onLogout (e) {
        handleLogout(e)
    }

    function onDeleteClick () {
        handleDelete()
    }

    return (
        <div className="bar" id="profile-bar">
            { user ?
            <div>
            <p>Hello, {user.first_name}!</p> 
                {activeSkatepark?<p>Active at: {activeSkatepark} Riding: {activeCategory}</p>:null}
            </div> :null}
            {!user.checkedIn && !isCheckingIn ? <button onClick={onCheckInClick}>CheckIn+</button>:null}
            {user.checkedIn ?
                <button onClick={onCheckout}>Leave</button>:null}
            <button onClick={onLogout}>Logout</button>
            <button onClick={onDeleteClick}>Delete profile</button>
        </div>
    )
}