import { useEffect, useState } from 'react';

export default function CheckIn ({ userId, skateparkId, handleCheckIn }) {

    const [skateparkName, setSkateparkName]=useState("");
    const [category, setCategory] = useState("");

    function handleSkateParkNameChange (e) {
        setSkateparkName(e.target.value);
    }

    function handleCategoryChange (e) {
        setCategory(e.target.value);
    }

    function onCheckInSubmit (e) {
        e.preventDefault();
        handleCheckIn(skateparkName, category);
    }

    return (
        <div className="popover" id="check-in">
            <form onSubmit={onCheckInSubmit} className="form" id="check-in-form">
                <select name="skate-park" onChange={handleSkateParkNameChange}>
                    <option value="" disabled selected>Choose a skatepark</option>
                    <option value="Cal Anderson Improvised Skate Park">Cal Anderson Improvised Skate Park</option>
                    <option value="Delridge Skate Park">Delridge Skate Park</option>
                    <option value="Jefferson Skate Park">Jefferson Skate Park</option>
                    <option value="Judkins Skate Park">Judkins Skate Park</option>
                    <option value="Seattle Center Skate Plaza">Seattle Center Skate Plaza</option>
                    <option value="Lower Woodland Skate Park">Lower Woodland Skate Park</option>
                </select>
                <select onChange={handleCategoryChange} name="What are you riding?">
                    <option id="skateboard" value="skateboard">Skateboard</option>
                    <option id="inline-skates" value="inline-skates">Inlineskates</option>
                    <option id="roller-skates" value="roller-skates">Rollerskates</option>
                    <option id="scooter" value="scooter">Scooter</option>
                    <option id="bike" value="bike">Bike</option>
                    <option id="other" value="other">Other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}