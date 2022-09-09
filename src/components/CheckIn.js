import { useEffect, useState } from 'react';

export default function CheckIn ({ userId, skateparkId, handleCheckIn }) {

    const [skateparkName, setSkateparkName]=useState("");
    const [category, setCategory] = useState("skateboard");

    function handleSkateParkNameChange (e) {
        setSkateparkName(e.target.value);
        console.log(skateparkName)
    }

    function handleCategoryChange (e) {
        const value = (e.target.value).toLowerCase();
        setCategory(value);
        console.log(category)
    }

    function onCheckInSubmit (e) {
        e.preventDefault();
        handleCheckIn(skateparkName, category);
    }

    return (
        <div className="popover" id="check-in">
            <p>Check In</p>
            <form onSubmit={onCheckInSubmit} className="form" id="check-in-form">
                <select name="skate-park" onChange={handleSkateParkNameChange}>
                    <option disabled selected>Choose a skatepark</option>
                    <option>Cal Anderson Improvised Skate Park</option>
                    <option>Delridge Skate Park</option>
                    <option>Jefferson Skate Park</option>
                    <option>Judkins Skate Park</option>
                    <option>Seattle Center Skate Plaza</option>
                    <option>Lower Woodland Skate Park</option>
                </select>
                <select onChange={handleCategoryChange} name="What are you riding?">
                    <option disabled selected>Choose a your ride</option>
                    <option id="skateboard">Skateboard</option>
                    <option id="inlineskates">Inlineskates</option>
                    <option id="rollerskates">Rollerskates</option>
                    <option id="scooter">Scooter</option>
                    <option id="bike">Bike</option>
                    <option id="other">Other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}