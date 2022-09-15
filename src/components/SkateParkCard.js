import { useEffect, useState } from "react";

export default function SkateparkCard ({ skatepark }) {
    const {name, location, users} = skatepark
    console.log(name, location, users)
    return(
        <div className="card">
        <p>{name}</p>
        <p>{location}</p>
        <div>
        <p>Active Users:</p>
        {skatepark.users ? users.map(user=><p>{user.first_name} {user.last_name}</p>):null}
        </div>
        </div>
    )

}