import React from 'react';
import {Link} from 'react-router-dom';

class MovieShow extends React.Component {

    componentDidMount(){
        this.props.fetchMovies();
    }

    render(){
        
        if (Object.values(this.props.movies).length === 0){
            return null
        }

        return(
        <div className="movie-show-background">
            <Link className="back-button" to="/browse"><i class="fas fa-arrow-left"></i></Link>
            <div className="movie-show-container">
                <video className="movie-show-video" src={this.props.movies[this.props.movieId].videoUrl} autoPlay controls ></video>
            </div>
        </div>
        )
    }
}

export default MovieShow;