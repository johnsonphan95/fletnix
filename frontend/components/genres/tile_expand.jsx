import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

class TileExpand extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <div style={{color: "white", position: "relative"}}>
                {this.props.expand}
            </div>
        )
    }
}

export default TileExpand;
