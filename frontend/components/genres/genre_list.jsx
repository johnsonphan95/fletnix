import React from 'react';
import {Link} from 'react-router-dom';
import { Player } from 'video-react';


class GenreList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            startIndex: 0, 
            endIndex: 6,
            showLeft: false, 
            showRight: false
        }
        this.shiftLeft = this.shiftLeft.bind(this);
        this.shiftRight = this.shiftRight.bind(this);
    }

    // ref ={(p) => {
    //     thisplayer = p;
    // }}

    componentDidMount(){
        this.props.fetchMovies();
    }

    shiftLeft(e){
        e.preventDefault(); 
        if (this.state.startIndex - 1 >= 0) {
            this.setState({
                startIndex: (this.state.startIndex - 1) ,
                endIndex: (this.state.endIndex - 1) 
            })
            
        }
    }

    shiftRight(e){
        e.preventDefault();
        
        if (this.state.endIndex + 1 <= this.props.genre.moviesLength) {
            this.setState({
                startIndex: (this.state.startIndex + 1),
                endIndex: (this.state.endIndex + 1)
            })
        }
    }

    render(){
        if (Object.values(this.props.movies).length === 0){
            return null
        } else if (this.props.moviesList === undefined){
            return null
        }
    
        let moviesLists = this.props.moviesList.slice(this.state.startIndex, this.state.endIndex).reverse().map(id => {
            return(
                <li className="genre-list-li" key={id}>
                    {/* <Link className="play-button" to={`/watch/${id}`}>
                        <Player 
                            poster={this.props.movies[id].photoUrl}
                            src={this.props.movies[id].videoUrl}
                            autoPlay={false}
                            muted={true}
                        />
                    </Link> */}
                    <Link className="play-button" to={`/watch/${id}`}><img width="100%" src={this.props.movies[id].photoUrl} /></Link>
                    
                </li>
            )
        })

        return (
            <div className="genre-list">
                <div className="genre-list-container">
                    <div className="genre-list-label"><Link className="genre-link" to={`/browse/genres/${this.props.genre.id}`}>{this.props.genre.genre}</Link></div>
                    <ul className="genre-list-ul">
                        <div onClick={this.shiftLeft} className="arrowButton"> <i className="fas fa-angle-left"></i> </div>
                        {moviesLists}
                        <div onClick={this.shiftRight} className="arrowButton"><i className="fas fa-angle-right"></i></div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default GenreList;