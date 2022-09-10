import { useState } from 'react';
import { CheckIn } from "./CheckIn";

export default function ProfileBar ({ handleLogout, renderCheckIn, handleCheckout, user, isCheckingIn, activeSkatepark, activeCategory }) {

    console.log(`checkin: ${user.checkedIn}, isCheckingIn: ${isCheckingIn}`)
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

    return (
        <div className="bar" id="profile-bar">
            { user ?
            <div>
            <p>Hello, {user.first_name}!</p> 
                {activeSkatepark?<p>Active at: {activeSkatepark} Riding: {activeCategory}</p>:null}
                {user.checkedIn ?
                <button onClick={onCheckout}>Leave</button>:null}
                {!user.checkedIn && !isCheckingIn ? <button onClick={onCheckInClick}>CheckIn+</button>:null}
            </div> :null}
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}