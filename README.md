
<p align="center">
  <img src="public/fletnix-logo.png" width="200" title="fletnix-logo">
</p>

https://fletnix.herokuapp.com/#/

Fletnix is a video library website which is a clone of the popular Netflix. Made with React.js and Redux for the front end and Rails/PostgreSQL for the back end.

<p align="center">
  <img src="fletnix.gif" width="750" title="fletnix-gif">
</p>

## Features

* Front end and Back end User Authentication 
* Dynamic Main Splash which updates with genres show pages 
* Scrollable lists of movies for each genre displayed
* Movies can be displayed along with player controls for a full user experience 
* Working Search bar displaying filtered titles


The searchbar actively makes a request and filters the titles and genres which include the search query everytime the query is changed. To limit the number of search requests a debounce function is implemented to wait for the user to finish inputting any changes to the query string after a set time of 500ms. 
```
debounce(func, time) {
        let that = this;
        return function (args) {
            let prev = that.last;
            that.last = Date.now();
            if (prev && ((that.last - prev) <= time)) {
                clearTimeout(that.timer)
            }
            that.timer = setTimeout(() => func(args), time)
        }
    }
```

This debounce function is also used to adjust the time which the main splash videos autoplay/pause feature whenever the user's cursor enters or leaves that main splash div.


