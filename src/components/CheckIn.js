import { useState } from 'react';

export default function CheckIn ({ isCheckingIn, handleCheckInSubmit, handleCheckInCancel, handleSkateparkNotListed }) {

    const [formData, setFormData] = useState({
            "skatepark_name": null,
            "category_name": null,
            "checkedIn": true
        });

    function onFormChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        if (value==="Skatepark not listed?") {
            handleSkateparkNotListed();
        } else {
            setFormData({
                ...formData,
                [name]:value
            });
        }
    }

    function onCheckInSubmit (e) {
        e.preventDefault();
        handleCheckInSubmit(formData);
    }

    function onCheckInCancel (e) {
        e.preventDefault();
        if(isCheckingIn){
            handleCheckInCancel(e);
        };
    }

    return (
        <div className="popover" id="check-in">
            <p className="title" id="check-in-form-title">Check In</p>
            <form onSubmit={onCheckInSubmit} className="form" id="check-in-form">
                <select id="skatepark-drop-down" name="skatepark_name" onChange={onFormChange}>
                    <option>Choose a skatepark</option>
                    <option>Cal Anderson Improvised Skate Park</option>
                    <option>Delridge Skate Park</option>
                    <option>Jefferson Skate Park</option>
                    <option>Judkins Skate Park</option>
                    <option>Seattle Center Skate Plaza (Seask8)</option>
                    <option>Lower Woodland Skate Park</option>
                    <option id="other-sp">Skatepark not listed?</option>
                </select>
                <select onChange={onFormChange} name="category_name">
                    <option>Choose a your ride</option>
                    <option id="skateboard">skateboard</option>
                    <option id="inlineskates">inlineskates</option>
                    <option id="rollerskates">rollerskates</option>
                    <option id="scooter">scooter</option>
                    <option id="bike">bike</option>
                    <option id="other">other</option>
                </select>
                <input type="submit" />
                <button onClick={onCheckInCancel}>Cancel</button>
            </form>
        </div>
    )
}