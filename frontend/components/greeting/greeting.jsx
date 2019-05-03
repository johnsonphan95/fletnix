import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

    const sessionLinks = () => {
        return(
            (window.location.hash !== "#/login") ? (
                <div>
                    <nav className="greeting-nav">
                        <Link className="header-logo" to="/"><img src="https://fontmeme.com/permalink/190502/78603fb0480f9521f3a09ec1be1bbe6c.png"/></Link>
                        <Link className="signin-link" to="/login">Sign In</Link>  
                    </nav>  
                </div>
            ) : (
                <div>
                    <nav className="greeting-nav">
                        <Link className="header-logo" to="/"><img src="https://fontmeme.com/permalink/190502/78603fb0480f9521f3a09ec1be1bbe6c.png" /></Link>
                    </nav>
                </div>
            )
        )
    };
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Guest</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    )
    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
