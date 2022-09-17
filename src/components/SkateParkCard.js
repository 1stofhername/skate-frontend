import '../css/skateparkcard.css';

export default function SkateparkCard ({ skatepark }) {
    const { name, location, imglink, users } = skatepark;
    
    return(
        <div className="card">
        <img src={imglink} className="park-img" alt={`${skatepark.id}-img`}></img>
        <p>{name}</p>
        <p>{location}</p>
        {users.length === 1 ? <p className="status" key={skatepark.name}>{users.length} Active Rider:</p>:null}
        {users.length > 1 ? <p className="status" key={skatepark.name}>{users.length} Active Riders:</p>:null}
        {users.length ? users.map(user=><div key={`skatepark_id_${skatepark.id}`}><p>{user.first_name}</p></div>)
            : <p className="status">No one is checked in at this park</p>}
    
        </div>
    )

}