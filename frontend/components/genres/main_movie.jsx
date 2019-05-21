import React from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';

class MainMovie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hover: true, 
            muted: true
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.muteControl = this.muteControl.bind(this);
    }

    handleMouseEnter(e){
        this.setState({ hover: true })
    }

    handleMouseLeave(e){
        this.setState({hover:false})
    }

    handleMute(e){
        if (this.state.muted === true) {
            this.setState({ muted: false})
        } else {
            this.setState({ muted: true })
        }
    }

    muteControl(){
        let muteButton; 
        if (this.state.muted === true){
            muteButton = <div className="mute-button" onClick={this.handleMute}><i class="fas fa-volume-mute"></i></div>
        } else {
            muteButton = <div className="mute-button" onClick={this.handleMute}><i class="fas fa-volume-up"></i></div>
        }

        return muteButton;
    }

    
    render(){
        
        return (
            <div className="main-index-splash" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}> 
                <ReactPlayer
                className="main-vid" 
                playing={this.state.hover}
                muted={this.state.muted}
                url={this.props.movie.videoUrl} 
                width="100%"
                height="100%"
                 />
                <div className="main-description-box">
                    <h1 className="main-title">{this.props.movie.title}</h1>
                    <Link className="main-play-button" to={`/watch/${this.props.movie.id}`}><i class="fas fa-play">&nbsp;&nbsp;Play</i></Link>
                    <p className="main-description">{this.props.movie.description}</p>
                </div>
                <div className="main-rating">{this.props.movie.rating}</div>
                {this.muteControl()}
                {/* <div className="mute-button" onClick={this.handleMute}><i class="fas fa-volume-off"></i></div> */}
            </div>
        )
    }
}

export default MainMovie;