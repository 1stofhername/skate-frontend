import '../css/skateparkcard.css';

export default function SkateparkCard ({ skatepark }) {
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

            <div className="skatepark-info-container">


            
                {/* <div className='park-details-container'> */}
                <div className='skatepark-name-div'>
                    <p className='skatepark-name'>{name}</p>
                    <p className='skatepark-location'>{location}</p>
                </div>

                <div className='park-img-div'>
                    <img src={imglink} className="park-img" alt={`${skatepark.id}-img`} />
                </div>
                    {/* <div onClick={handleExpandClick} className='plus-icon-div'> */}
                        {/* <p>See Active Riders</p> */}
                        {/* <p id={`${skateparkId}_expand`} className='plus-icon'>+</p> */}
                    {/* </div> */}
                {/* </div> */}
            </div>

            <div onClick={handleExpandClick} className='plus-icon-div'>
                        <p>See Active Riders</p>
                        <p id={`${skateparkId}_expand`} className='plus-icon'>+</p>
                 </div>

            <div className='active-riders-container'>
                {users.length ? users.map(user=><p key={`${skatepark.id}_${user.id}`}>{user.first_name}</p>)
                    : null}
            </div>
        </div>
    )

}