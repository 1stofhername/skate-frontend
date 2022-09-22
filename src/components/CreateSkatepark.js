import { useState } from 'react';

export default function CreateSkatepark () {
return (
    <form id="skatepark-create-form" hidden>
        <label id="other-sp-input">Name:<input onChange={handleSkateParkNameChange} type="text" placeholder='Battle for the Block Skate Fest' /></label>
        <label>Location:<input placeholder="Ballard" type="text" /></label>
        <label>Image link:<input type="text" placeholder='https://image.jpeg' /></label>
        <label>Check in here?<input type="checkbox" /></label>
        <input type="submit" />
        <button onClick={handleAddCancel}>Cancel</button>
    </form>
)
}