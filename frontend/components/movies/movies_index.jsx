import React from 'react';

class moviesIndex extends React.Component {

    componentDidMount(){
        this.props.fetchMovies();
        this.props.fetchGenres();
        this.props.fetchTags();
    }

    render(){
        let movies = this.props.movies.map(movie => {
            return (
                <li className="movie-item" key={movie.id}>
                    <img className="movie-item-img" src={movie.photoUrl} alt=""/>
                </li>
            )
        })

        return(
            <div className="movies-index-background">
                <div className="movies-index-container">
                    <ul className="movies-index-ul">
                        {movies}
                    </ul>
                </div>
            </div>
        )
    }
}

export default moviesIndex;