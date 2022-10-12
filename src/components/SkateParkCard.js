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
    
    const skatepark_id = `${skatepark.name}`.toLowerCase().split(' ').join('-');

    function handleCardClick (e) {
        const id = e.target.id;
        console.log(e.target.id)
    }
    
    function handleCardExit (e) {
        console.log('out')
    }
    return(
        <div className="card" id={skatepark_id} onClick={handleCardClick}>
                {/* <div className='park-img-div'>
                    <img src={imglink} className="park-img" alt={`${skatepark.id}-img`} />
                </div> */}
            <div className="skatepark-text-container">
                <div className='park-details-container'>
                    <p>+</p>
                    <p className='skatepark-name'>{name}</p>
                    {/* <p>{location}</p> */}
                </div>
            
            <div className='active-riders-container'>
                <p id="rider-count" className="status">{renderText(users.length)}</p>
                {users.length ? users.map(user=><div key={`${skatepark.id}_${user.id}`}><p key={`skatepark_p_${skatepark.id}`}>{user.first_name}</p></div>)
                    : null}
            </div>
            </div>
        </div>
    )

}