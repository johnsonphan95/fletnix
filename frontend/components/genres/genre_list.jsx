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
        // debugger
    

        let moviesLists = this.props.moviesList.map(id => {
            return(
                <li key={id}>
                    <img src={this.props.movies[id].photoUrl} alt=""/>
                    {this.props.movies[id].title}
                </li>
            )
        })

        return (
            <ul>
                {moviesLists}
            </ul>
        )
    }
}

export default GenreList;