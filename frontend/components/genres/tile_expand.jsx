import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

class TileExpand extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{color: "white"}}>
                {/* {this.props.id} */}
                {this.props.expand}
                {/* <ReactPlayer url={this.props.movie.videoUrl}/> */}
            </div>
        )
    }
}

export default TileExpand;
