import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <Link to="/" className="home">
            <h1><marquee behavior="alternate">FLETNIX</marquee></h1>
            </Link>
                <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
    </div>
)
export default App;