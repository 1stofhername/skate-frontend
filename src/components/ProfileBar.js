import { useState } from 'react';
import { CheckIn } from "./CheckIn";

export default function ProfileBar ({ handleLogout, renderCheckIn, handleCheckout, user, isCheckingIn }) {

    console.log(user.checkedIn)
    function onCheckout () {
        handleCheckout();
    }

    function onCheckIn (e) {
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
                {!user.checkedIn && !isCheckingIn ? <button onClick={onCheckIn}>CheckIn+</button>:null}
            </div> :null}
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}