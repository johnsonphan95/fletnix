import React from 'react';
// import {findMovies} from '../../../actions/movie_actions'

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phrase: ""
            // movies: this.props.movies, 
            // searchMovies: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // let listMovies = [];
        // e.preventDefault();
    
        // if (e.Target.value) {
        //     listMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))
        // }

        // this.setState({
        //     searchMovies: listMovies
        // })
        
        if (e.Target.value){
            e.preventDefault(); 
            this.setState({
                phrase: e.Target.value
            })
        }
    }

    render(){
        return(
            <div>
                <input type="text"
                    className="search-bar-input"
                    value={this.state.phrase}
                    onChange={this.handleChange}
                    placeholder="titles..."
                />
            </div>
        )
    }
}

export default SearchBar;