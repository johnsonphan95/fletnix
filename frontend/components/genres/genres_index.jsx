import React from 'react';
import GenreListContainer from './genre_list_container';
import MainMovie from './main_movie';

class GenreIndex extends React.Component {
    constructor(props){
        super(props);
        this.topGenre = this.topGenre.bind(this);
    }

    componentDidMount(){
        this.props.fetchGenres();
        this.props.fetchMovies();
    }

    topGenre(){
        let top = this.props.genres[this.props.genreId]
        if (this.props.genreId){
            
            return(
                <div>
                    <GenreListContainer moviesList={top.movies} genre={top} />
                </div>
            )
        }
    }

    render(){
        let genres;

        if (Object.values(this.props.genres).length === 0){
            return null
        }   

        if (!this.props.genreId){
            genres = Object.values(this.props.genres).map(genre => {           
                return (
                    <li className="genres-index-li" key={genre.id}>
                        <GenreListContainer moviesList={genre.movies} genre={genre} />
                    </li>
                )
            })
        } else {
            genres = Object.values(this.props.genres).map(genre => {
                if (genre.id !== parseInt(this.props.genreId)) { 
                    return (
                        <li className="genres-index-li" key={genre.id}>
                            <GenreListContainer moviesList={genre.movies} genre={genre} />
                        </li>
                    )
                }
            }) 
        }

        

        return( 
            <div className="genres-index-background">
                <MainMovie />
                <div className="genres-index-container">
                    <ul className="genres-index-ul">     
                        {this.topGenre()} 
                        {genres}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GenreIndex;