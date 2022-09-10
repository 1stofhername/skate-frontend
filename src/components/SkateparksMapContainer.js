import SkateparkCard from "./SkateparkCard";
import { useState } from 'react';

export default function SkateparkMapContainer ({ skateparks, isLoading }) {

    return(
    <div>
        {skateparks.length > 0 
            ? skateparks.map((park)=>{
                return (
                <SkateparkCard key={park.id} skatepark={park}/>
                )
                })
                : <p>Loading</p>}
    </div>
    )
    // skateparks.map((skatepark)=><SkateparkCard key={skatepark.id} skatepark={skatepark} />)
    
}