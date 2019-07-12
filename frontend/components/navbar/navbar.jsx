import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search/search_bar_container';

const NavBar = ({currentUser, logout, trendingId, recentId}) => {

    const sessionLinks = () => {
            if (window.location.hash !== "#/login") {
                return (
                    <div>
                        <nav className="signin-nav">
                            <Link className="header-logo" to="/"><img src="fletnix-logo.png" /></Link>
                            <Link className="signin-link" to="/login">Sign In</Link>
                        </nav>
                    </div>
                )}  
                else {
                    return (
                        <div>
                            <nav className="logo-nav">
                                <Link className="header-logo" to="/"><img src="fletnix-logo.png" /></Link>
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
                        <Link className="nav-logo" to="/"><img src="/fletnix-logo2.png" /></Link>
                    </div>
                    <div className="nav-button-container">
                        <ul className="nav-button-ul">
                            <li className="nav-button"><Link className="nav-button-link" to="/">Home</Link></li>
                            <li className="nav-button"><Link className="nav-button-link" to={`/browse/genres/${trendingId}`}>Trending Now</Link></li>
                            <li className="nav-button"><Link className="nav-button-link" to={`/browse/genres/${recentId}`}>Recently Added</Link></li>
                        </ul>  
                    </div>
                    <div className="search-bar">
                        <SearchBarContainer />
                    </div>
                    <div className="nav-user-dropdown">
                        <img className="user-avatar" src="https://occ-0-2219-2218.1.nflxso.net/art/48870/a79eb5114719dad46b1e942231e6a4b030248870.png" alt=""/>
                        <div className="dropdown">
                            <a className="current-user-profile" id="dropdown-item">{currentUser.email}</a>
                            <a className="nav-logout" id="dropdown-item" onClick={logout}>Sign out of Fletnix</a>
                        </div>
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
