import React from 'react';

class moviesIndex extends React.Component {

    componentDidMount(){
        this.props.requestMovies();
    }

    render(){
        let movies = this.props.movies.map(movie => {
            return (
                <li key={movie.id}>
                    {movie.title}
                    <img src={movie.photoUrl} alt=""/>
                </li>
            )
        })

        return(
            <div>
                <ul>
                    {movies}
                </ul>
            </div>
        )
    }
}

export default moviesIndex;