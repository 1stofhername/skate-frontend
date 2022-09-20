import { useEffect, useState } from "react";
import skateboard from '../icons/icons8-skateboard-50.png';
import scooter from '../icons/icons8-kick-scooter-24.png';
import inlineskates from '../icons/icons8-rollerblade-64.png';
import rollerskates from '../icons/icons8-roller-skates-50.png';
import bike from '../icons/icons8-bicycle-64.png';

export default function CategoryBar ({ categories, activeSkatepark }) {
    // const [categories, setCategories]=useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:9292/categories')
    //     .then((r)=>r.json())
    //     .then((data)=>setCategories(data))
    // },[activeSkatepark]);

    const renderIcons = (category)=>{
        if(category === "skateboard"){
            return <img className="icon" src={skateboard} />
        } else if(category ==="inlineskates"){
            return <img className="icon" src={inlineskates} />
        } else if (category === "rollerskates") {
            return <img className="icon" src={rollerskates} />
        } else if (category === "scooter") {
            return <img className="icon" src={scooter} />
        } else if (category === "bike"){
            return <img className="icon" src={bike} />
        }
    };

    return (
        <div className="category-list">
        {categories? categories.map((cat)=><p key={cat.name}>{renderIcons(cat.name)} {cat.users.length} </p>):null}
        {/* {categories ? icon():null} */}
        </div>
    )
}