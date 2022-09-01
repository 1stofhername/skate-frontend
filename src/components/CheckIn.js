export function CheckIn () {
    return (
        <div className="popover" id="check-in">
            <form className="form" id="check-in-form">
                <select name="skate-park">
                    <option value="Cal Anderson Improvised Skate Park">Cal Anderson Improvised Skate Park</option>
                    <option value="Delridge Skate Park">Delridge Skate Park</option>
                    <option value="Jefferson Skate Park">Jefferson Skate Park</option>
                    <option value="Judkins Skate Park">Judkins Skate Park</option>
                    <option value="Seattle Center Skate Plaza">Seattle Center Skate Plaza</option>
                    <option value="Lower Woodland Skate Park">Lower Woodland Skate Park</option>
                </select>
                <select name="What are you riding?">
                    <option value="skateboard">Skateboard</option>
                    <option value="inline-skates">Inlineskates</option>
                    <option value="roller-skates">Rollerskates</option>
                    <option value="scooter">Scooter</option>
                    <option value="bike">Bike</option>
                    <option value="other">Other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}