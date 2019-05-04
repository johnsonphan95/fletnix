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
import MoviesIndexContainer from './movies/movies_index_container';
import { GreetingOffer } from './greeting/greeting_offer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Placeholder from './placeholder';

const App = () => (
    <div>
        <header>
            <GreetingContainer />
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