import SkateparkCard from "./SkateparkCard";
import CategoryBar from "./CategoryBar";
import { useState } from 'react';

export default function SkateparkMapContainer ({ skateparks, activeSkatepark }) {
    console.log(skateparks)
    return(
    <div>
        <CategoryBar activeSkatepark={activeSkatepark} />
        <div className="skateparks-container">
        {skateparks.length > 0 
            ? skateparks.map((park)=>{
                return (
                <SkateparkCard key={park.id} skatepark={park}/>
                )
                })
                : <p>Loading</p>}
        </div>
    </div>
    )
    // skateparks.map((skatepark)=><SkateparkCard key={skatepark.id} skatepark={skatepark} />)
    
}