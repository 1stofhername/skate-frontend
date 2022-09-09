import { useState } from 'react';
import { CheckIn } from "./CheckIn";

export default function ProfileBar ({ handleLogout, renderCheckIn, handleCheckout, user, isCheckingIn }) {

    console.log(`checkin: ${user.checkedIn}, isCheckingIn: ${isCheckingIn}`)
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
                <p>Skate Park Name</p>
                <p>Rollerskates</p>
                {user.checkedIn ?
                <button onClick={onCheckout}>Leave</button>:null}
                {!user.checkedIn && !isCheckingIn ? <button onClick={onCheckInClick}>CheckIn+</button>:null}
            </div> :null}
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}