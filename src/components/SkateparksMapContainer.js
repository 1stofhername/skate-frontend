import SkateparkCard from "./SkateparkCard";
import CategoryBar from "./CategoryBar";

export default function SkateparkMapContainer ({ categories, skateparks, activeSkatepark }) {
    
    return(
    <div>
        <CategoryBar categories={categories} activeSkatepark={activeSkatepark} />
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
}