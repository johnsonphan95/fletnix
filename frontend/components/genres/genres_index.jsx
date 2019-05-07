import React from 'react';
import GenreListContainer from './genre_list_container';
import MainMovie from './main_movie';

class GenreIndex extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchGenres();
        this.props.fetchTags();
    }
 

    render(){

        if (this.props.genres.length === 0){
            return null
        }   

        let genres = this.props.genres.map(genre => {           
            return (
                <li className="genres-index-li" key={genre.id}>
                    <GenreListContainer moviesList={genre.movies} genre={genre}/>
                </li>
            )
        })

        return( 
            <div className="genres-index-background">
                <MainMovie />
                <div className="genres-index-container">
                    <ul className="genres-index-ul">
                        {genres}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GenreIndex;