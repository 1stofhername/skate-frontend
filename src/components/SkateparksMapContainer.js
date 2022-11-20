import SkateparkCard from "./SkateparkCard";
import CategoryBar from "./CategoryBar";

export default function SkateparkMapContainer ({ categories, skateparks, activeSkatepark, renderIcons }) {
    
    return(
        <>
    
        <div className="category-bar">
            <CategoryBar categories={categories} activeSkatepark={activeSkatepark} renderIcons={renderIcons} />
        </div>
        <div className="page">
        
        <div className="skateparks-info-container">
        {skateparks.length > 0 
            ? skateparks.map((park)=>{
                return (
                
                <SkateparkCard key={park.id} skatepark={park} renderIcons={renderIcons} />
        
                )
                })
                : <p>Loading</p>}
                
        {/* </div> */}
        </div>
        <div className="skateparks-container">
            </div>
        </div>
    
    </>
    )
}