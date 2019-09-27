import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phrase: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.receiveSearchPhrase(e.target.value);
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