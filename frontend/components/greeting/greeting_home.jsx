import 'React' from 'react';
import {Link} from 'react-router-dom';

export const GreetingHome = () => (
    <div className="splash-background">
        <div className="signup-trial-button">
            <Link to="/signup">Watch Free For 30 Days</Link>
        </div>
    </div>
)