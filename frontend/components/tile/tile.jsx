import React from 'react';

class Tile extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="tile-container">
                <img className="genre-item-img" src={this.props.movie.photoUrl} alt="" />
            </div>
        )
    }
}

export default Tile;