import "./topBox.scss"
import {topOwners} from "../../data"

const TopBox = () => {
    return (
        <div className ="topBox">
            <h1>Top Owners</h1>
            <img src="home.svg" alt="house" />
            <div className='list>'>
                {topOwners.map(user=>(
                    <div className='listItem' key={user.id}>
                        <div className="user">
                            <img src={user.img} alt="user" />
                            <div className="userTexts">
                                <span className="username">{user.username}</span>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                        <span className="amount">{user.property}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopBox;