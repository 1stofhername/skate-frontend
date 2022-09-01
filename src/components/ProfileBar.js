import { useState } from 'react';
import { CheckIn } from "./CheckIn";

export default function ProfileBar ({ handleLogout, activateCheckingIn }) {

    
    
    return (
        <div className="bar" id="profile-bar">
            <img src={null} />
            <p>Hello, first_name!</p>
            <p>Skate Park Name</p>
            <p>Rollerskates</p>
            <button onClick={activateCheckingIn}>CheckIn+</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}