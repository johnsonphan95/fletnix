import React from 'react';
// import {findMovies} from '../../../actions/movie_actions'

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phrase: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({phrase: e.target.value}, () => {
            this.props.receiveSearchPhrase(this.state.phrase)
        })
    }

    render(){
        return(
            <div className="search-bar-wrapper">
                <i className="fas fa-search"></i>
                <input type="text"
                    className="search-bar-input"
                    value={this.state.phrase}
                    onChange={this.handleChange}
                    placeholder=" Titles, genres..."
                />
            </div>
        )
    }
}

export default SearchBar;