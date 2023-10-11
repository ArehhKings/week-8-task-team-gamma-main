import "./navbar.scss";

const Navbar = () => {
    return (
        <div className ="navbar">
            <div className="logo">
            <img src="logo.svg" alt="logo-image" />
            <span>Horizon</span>
            </div>
            <div className="icons">
                <img src="search.svg" alt="" className="icon"/>
                <img src="app.svg" alt="" className="icon"/>
                <img src="expand.svg" alt="" className="icon"/>
                <div className="notification">
                    <img src="notifications.svg" alt="" className=""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    <span>Lawrence</span>
                </div>
                <img src="settings.svg" alt="" className="icon"/>
            </div>
        </div>
    );
}

export default Navbar;