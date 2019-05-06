import React from 'react';
import GenreList from './genre_list.jsx';

class GenreIndex extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchGenres();
    }

    render(){
        let genres = this.props.genres.map(genre => {
            return(
                <li>
                    <GenreList />
                </li>
            )
        })
    }
}

export default GenreIndex;