import '../css/skateparkcard.css';

export default function SkateparkCard ({ skatepark, renderIcons }) {
    const { name, location, imglink, users } = skatepark;

    const renderText = (userCount) =>{
        if(userCount === 1) {
            return (`${userCount} Active Rider`)
        } else if (userCount > 1) {
            return (`${userCount} Active Riders`)
        } else {
            return "No one is checked in at this park"
        }
    }
    
    const skateparkId = `${skatepark.name}`.toLowerCase().split(' ').join('-');

    function handleExpandClick (e) {
        const id = e.target.id.split('_')[0];
        const cards = document.getElementsByClassName('card');
        for(let element of cards) {
            const expanded = element.getAttribute('expanded');
            if (element.id === id){
                if (!expanded){
                    element.setAttribute('expanded', true);
                } else {
                    element.removeAttribute('expanded');
                }
            } else {
                element.removeAttribute('expanded');
            }
        }
    }

    return(
        <div className="card" id={skateparkId}>
                {/* <div className='park-img-div'>
                    <img src={imglink} className="park-img" alt={`${skatepark.id}-img`} />
                </div> */}
            <div className="skatepark-text-container">
                <div className='park-details-container'>
                    <div className='skatepark-name-div'>
                        <p className='skatepark-name'>{name}</p>
                    </div>
                    <div onClick={handleExpandClick} className='plus-icon-div'>
                        <p id={`${skateparkId}_expand`} className='plus-icon'>+</p>
                    </div>
                    {/* <p>{location}</p> */}
                </div>
            </div>
            <p>{renderText(users.length)}</p>
            <div className='active-riders-container'>
                {users.length ? users.map(user=><p key={`${skatepark.id}_${user.id}`}>{user.first_name}</p>)
                    : null}
            </div>
        </div>
    )

}