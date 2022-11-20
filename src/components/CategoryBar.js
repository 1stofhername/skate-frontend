export default function CategoryBar ({ categories, renderIcons }) {

    return (
        <div className="category-list">
        {categories ? 
            categories.map((cat)=>
                <div key={cat.name} className='category-info-container' id={cat.name}>
                    <p key={cat.name}>{renderIcons(cat.name)}</p>
                    <p>{cat.users.length} </p>
                </div>)
            :null
            }
        </div>
    )
}