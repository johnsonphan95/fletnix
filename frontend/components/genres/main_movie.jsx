import React from 'react';
import {Link} from 'react-router-dom';

class MainMovie extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="main-index-splash">
                <img className="main-img" src={this.props.movie.photoUrl} alt=""/>
                <div className="main-description-box">
                    <h1 className="main-title"><strong>{this.props.movie.title}</strong></h1>
                    <Link className="main-play-button" to={`/watch/${this.props.movie.id}`}><i class="fas fa-play">&nbsp;&nbsp;Play</i></Link>
                    <p className="main-description">{this.props.movie.description}</p>
                </div>
            </div>
        )
    }
}

export default MainMovie;