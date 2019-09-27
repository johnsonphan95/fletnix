import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.debounce = this.debounce.bind(this);
    }

    debounce(func, time) {
        let that = this
        return function (args) {
            let previousCall = that.lastCall;
            that.lastCall = Date.now();
            if (previousCall && ((that.lastCall - previousCall) <= time)) {
                clearTimeout(that.lastCallTimer)
            }
            that.lastCallTimer = setTimeout(() => func(args), time)
        }
    }

    handleChange(e){
        this.debounce(this.props.receiveSearchPhrase, 500)(e.currentTarget.value);
    }

    render(){
        return(
            <div className="search-bar-wrapper">
                <i className="fas fa-search"></i>
                <input type="text"
                    className="search-bar-input"
                    onChange={this.handleChange}
                    placeholder=" Titles, genres..."
                />
            </div>
        )
    }
}

export default SearchBar;