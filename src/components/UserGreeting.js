export default function UserGreeting (user, activeCategory, activeSkatepark) {
    
    return (
        <div id="user-details">
            <p className="greeting">Hello, {user.first_name}!</p> 
                {activeSkatepark
                    ? <p className="active-info">Active at: {activeSkatepark} Riding: {activeCategory}</p>
                    : null}
            </div>
        )

}