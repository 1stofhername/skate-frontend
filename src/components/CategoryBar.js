import skateboard from '../icons/icons8-skateboard-64.svg';
import scooter from '../icons/icons8-kick-scooter-24.svg';
import inlineskates from '../icons/icons8-rollerblade-64.svg';
import rollerskates from '../icons/icons8-roller-skates-64.svg';
import bike from '../icons/icons8-bicycle-64.svg';
import other from '../icons/icons8-question-mark-64.svg';

export default function CategoryBar ({ categories }) {

    const renderIcons = (category)=>{
        if(category === "skateboard"){
            return <img className="icon" src={skateboard} alt="skateboard" />
        } else if(category ==="inlineskates"){
            return <img className="icon" src={inlineskates} alt="inlineskates" />
        } else if (category === "rollerskates") {
            return <img className="icon" src={rollerskates} alt="rollerskates" />
        } else if (category === "scooter") {
            return <img className="icon" src={scooter} alt="scooter" />
        } else if (category === "bike"){
            return <img className="icon" src={bike} alt="bicycle" />
        } else {
            return <img className="icon" src={other} alt="other" />
        }
    };

    return (
        <div className="category-list">
        {categories? categories.map((cat)=><div key={cat.name} className={cat.name}><p key={cat.name}>{renderIcons(cat.name)} {cat.users.length} </p></div>):null}
        </div>
    )
}