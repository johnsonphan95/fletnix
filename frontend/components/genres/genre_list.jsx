import React from 'react';


class GenreList extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchMovies();
    }

    render(){

        if (Object.values(this.props.movies).length === 0){
            return null
        }
    
        let moviesLists = this.props.moviesList.map(id => {
            return(
                <li className="genre-list-li" key={id}>
                    <img className="genre-item-img" src={this.props.movies[id].photoUrl} alt=""/>
                </li>
            )
        })

        return (
            <div className="genre-list-container">
                <div className="genre-list-label">{this.props.genre.genre}</div>
                <ul className="genre-list-ul">
                    {moviesLists}
                </ul>
            </div>
        )
    }
}

export default GenreList;