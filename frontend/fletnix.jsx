import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // window testing
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    //

    ReactDOM.render(<Root store={store}/>, root);

    function changeNavStyle (){
        const nav = document.querySelector(".navbar-group");
        this.scrollY <= 50 ? nav.style.background = "transparent" : nav.style.background = "rgba(1, 1, 1, 1)";
    }

    window.addEventListener("scroll", changeNavStyle, false);
});