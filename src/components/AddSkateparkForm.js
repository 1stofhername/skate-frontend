import { useState } from 'react';

export default function AddSkateparkForm ({ handleAddCancel }) {

    const [formData, setFormData] = useState({
        "name": null,
        "location": null,
        "imglink": null
    })

    function onFormChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(formData)
    }

    return (
        <div className='form'>
            <p className='title'>Add a skatepark</p>
            <form id="skatepark-create-form">
                <label id="other-sp-input">
                    Name:
                    <input name="name" type="text" placeholder='Battle for the Block Skate Fest' onChange={onFormChange} />
                </label>
                <label>
                    Location:
                    <input name="location" placeholder="Ballard" type="text" onChange={onFormChange} />
                </label>
                <label>
                    Image link:
                    <input name="imglink" type="text" placeholder='https://image.jpeg' onChange={onFormChange} />
                </label>
                <label>Check in here?<input type="checkbox" /></label>
                <input type="submit" />
                <button onClick={handleAddCancel}>Cancel</button>
            </form>
        </div>
    )
}