import React from 'react';
import {Link} from 'react-router-dom';

export const GreetingOffer = () => (
    <div className="greeting-background">
        <div className="greeting-offer">
            <h1 className="greeting-message">
                Unlimited movies <br/>
                TV shows, and more.
            </h1> 
            <h2 className="greeting-submessage">
                Watch anywhere. Cancel anytime.
            </h2>
            <Link className="greeting-trial-button" to="/signup">WATCH FREE FOR 30 DAYS ></Link>
        </div>
    </div>
);
