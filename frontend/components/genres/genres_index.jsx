import React from 'react';
import GenreListContainer from './genre_list_container';

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
                <li className="genre-index-li" key={genre.id}>
                    {genre.genre}
                    <GenreListContainer moviesList={genre.movies}/>
                </li>
            )
        })

        return( 
            <div>
                <div className="genre-index-container">
                    <ul className="genre-index-ul">
                        {genres}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GenreIndex;