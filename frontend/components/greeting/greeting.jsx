import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <div>
            <nav className="greeting-nav">
                <Link className="signin-link" to="/login">Sign In</Link>  
            </nav>  
        </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Guest</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    )
    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
