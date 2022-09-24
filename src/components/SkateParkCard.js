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

    
    
    return(
        <div className="card">
        <img src={imglink} className="park-img" alt={`${skatepark.id}-img`}></img>
        <p>{name}</p>
        <p>{location}</p>
        <p id="rider-count" className="status">{renderText(users.length)}</p>
        {users.length ? users.map(user=><div key={`skatepark_id_${skatepark.id}`}><p>{user.first_name}</p></div>)
            : null}
    
        </div>
    )

}