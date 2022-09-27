import { useState } from 'react';

export default function AddSkateparkForm ({ handleAddCancel, handleSkateparkAddSubmit }) {

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
    }

    function onSkateparkAddSubmit (e) {
        e.preventDefault();
        handleSkateparkAddSubmit(formData);
    }

    return (
        <div className='form'>
            <p className='title'>Add a skatepark</p>
            <form id="skatepark-add-form" onSubmit={onSkateparkAddSubmit}>
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
                <input type="submit" />
                <button onClick={handleAddCancel}>Cancel</button>
            </form>
        </div>
    )
}