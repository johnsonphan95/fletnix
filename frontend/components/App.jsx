import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import MoviesIndexContainer from './movies/movies_index_container';
import { GreetingOffer } from './navbar/greeting_offer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
            <ProtectedRoute exact path="/browse" component={MoviesIndexContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
            <AuthRoute exact path="/" component={GreetingOffer}/>
            <Redirect to="/" />
        </Switch>
    </div>
)
export default App;