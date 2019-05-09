import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {

    const sessionLinks = () => {
            if (window.location.hash !== "#/login") {
                return (
                    <div>
                        <nav className="signin-nav">
                            <Link className="header-logo" to="/"><img src="https://fontmeme.com/permalink/190502/78603fb0480f9521f3a09ec1be1bbe6c.png" /></Link>
                            <Link className="signin-link" to="/login">Sign In</Link>
                        </nav>
                    </div>
                )}  
                else {
                    return (
                        <div>
                            <nav className="logo-nav">
                                <Link className="header-logo" to="/"><img src="https://fontmeme.com/permalink/190502/78603fb0480f9521f3a09ec1be1bbe6c.png" /></Link>
                            </nav>
                        </div>
                )
            }        
    };
    const navbar = () => {
        if (!window.location.hash.includes("watch")){
            return(
                <hgroup className="navbar-group">
                    <div className="nav-logo-container">
                        <Link className="nav-logo" to="/"><img src="https://fontmeme.com/permalink/190505/e8cd730959225312daab78a2bc78e9a5.png" /></Link>
                    </div>
                    <div className="nav-button-container">
                        <ul className="nav-button-ul">
                            <li className="nav-button"><Link className="nav-button-link" to="/">Home</Link></li>
                            <li className="nav-button"><Link className="nav-button-link" to="/browse/genres/2">Trending Now</Link></li>
                            <li className="nav-button"><Link className="nav-button-link" to="/browse/genres/3">Recently Added</Link></li>
                        </ul>  
                    </div>
                    <div className="nav-user-dropdown">
                        <h2 className="current-user-profile">{currentUser.email}</h2>
                        <button className="nav-logout" onClick={logout}>Log Out</button>
                    </div>
                </hgroup>
            )
        } else {
            return null
        }
    }
    return currentUser ? navbar() : sessionLinks();
}

export default NavBar;
