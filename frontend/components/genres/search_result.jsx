import React from 'react';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
    constructor(props){
        super(props); 
        this.searchResults = this.searchResults.bind(this);
    }

    componentDidMount(){
        // this.props.fetchMovies();
        // this.props.fetchGenres();
    }

    searchResults(){
        let query = this.props.query;
        let movies = Object.values(this.props.movies); 
        let genres = Object.values(this.props.genres);
        let results = new Set; 
        movies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
        .forEach(el => results.add(el.id));
        genres = genres.filter(genre => genre.genre.toLowerCase().includes(query.toLowerCase()))
        .forEach(genre => genre.movies.forEach(id => results.add(id)));
        console.log(results)
        results = Array.from(results);
        console.log(results)
        return results.map(id => {
            return (
                <li className="search-movie-li" key={id}>
                    <Link className="play-button" to={`/watch/${id}`}><img width="100%" src={this.props.movies[id].photoUrl}/></Link>
                </li>
            )
        })
    }

    render(){
        return (
            <div className="search-result-container">
                    {this.searchResults()}
            </div>
        )
    }
}

export default SearchResult;