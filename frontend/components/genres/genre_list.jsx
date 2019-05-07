import React from 'react';


class GenreList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            startIndex: 0, 
            endIndex: 6
        }
        this.carouselLeft = this.carouselLeft.bind(this);
        this.carouselRight = this.carouselRight.bind(this);
       
    }




    componentDidMount(){
        this.props.fetchMovies();
    }

    carouselLeft(e){
        e.preventDefault(); 
        if (this.state.startIndex - 6 >= 0) {
            this.setState({
                startIndex: (this.state.startIndex - 6) ,
                endIndex: (this.state.endIndex - 6) 
            })
        }
    }

    carouselRight(e){
        e.preventDefault();
        
        if (this.state.endIndex + 6 <= this.props.genre.moviesLength) {
            this.setState({
                startIndex: (this.state.startIndex + 6),
                endIndex: (this.state.endIndex + 6)
            })
        }
    }

    render(){
        if (Object.values(this.props.movies).length === 0){
            return null
        }
    
        let moviesLists = this.props.moviesList.slice(this.state.startIndex, this.state.endIndex).map(id => {
            return(
                <li className="genre-list-li" key={id}>
                    <img className="genre-item-img" src={this.props.movies[id].photoUrl} alt=""/>
                </li>
            )
        })

        return (
            <div className="genre-list">
                <div className="genre-list-label">{this.props.genre.genre}</div>
                <div className="genre-list-container">
                    <ul className="genre-list-ul">
                        <button onClick={this.carouselLeft} className="arrowButton"> L </button>
                        {moviesLists}
                        <button onClick={this.carouselRight} className="arrowButton"> > </button>
                    </ul>
                </div>
            </div>
        )
    }
}

export default GenreList;