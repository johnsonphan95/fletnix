import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // window testing
    
    ReactDOM.render(<h1><marquee behavior="alternate" direction="">React Works!</marquee></h1>, root);
});