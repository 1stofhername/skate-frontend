import { useState } from 'react';
import { CheckIn } from "./CheckIn";

export default function ProfileBar ({ handleLogout, renderCheckIn, handleCheckout, user }) {
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
            <img src={null} />
            <p>Hello, {user.first_name}!</p>
            { user.checkedIn ? 
            <div>
                <p>Skate Park Name</p>
                <p>Rollerskates</p>
                <button onClick={onCheckout}>Leave</button>
            </div> :
            <button onClick={onCheckIn}>CheckIn+</button>}
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}