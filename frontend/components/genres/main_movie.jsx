import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

class MainMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      muted: true,
      delay: false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.muteControl = this.muteControl.bind(this);
    this.debounce = this.debounce.bind(this);
  }

  componentDidMount() {
    this.setState({ hover: true });
  }

  debounce(func, time) {
    let that = this;
    return function(args) {
      let prev = that.last;
      that.last = Date.now();
      if (prev && that.last - prev <= time) {
        clearTimeout(that.timer);
      }
      that.timer = setTimeout(() => func(args), time);
    };
  }

  handleMouseOver(e) {
    clearTimeout(this.timer);
    if (this.state.hover === false) {
      this.setState({ hover: true });
    }
  }

  handleMouseEnter(e) {
    clearTimeout(this.timer);
    if (this.state.hover === false) {
      this.setState({ hover: true });
    }
  }

  handleMouseLeave(e) {
    this.debounce(() => {
      this.setState({ hover: false });
    }, 2000)(e);
  }

  handleMute(e) {
    if (this.state.muted === true) {
      this.setState({ muted: false });
    } else {
      this.setState({ muted: true });
    }
  }

  muteControl() {
    let muteButton;
    if (this.state.muted === true) {
      muteButton = (
        <div className="mute-button" onClick={this.handleMute}>
          <i className="fas fa-volume-mute"></i>
        </div>
      );
    } else {
      muteButton = (
        <div className="mute-button" onClick={this.handleMute}>
          <i className="fas fa-volume-up"></i>
        </div>
      );
    }

    return muteButton;
  }

  render() {
    return (
      <div
        className="main-index-splash"
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
      >
        <ReactPlayer
          className="main-vid"
          playing={this.state.hover}
          muted={this.state.muted}
          url={this.props.movie.videoUrl}
          width="100%"
          height="100%"
          loop={true}
        />
        <div className="main-description-box">
          <h1 className="main-title">{this.props.movie.title}</h1>
          <Link
            className="main-play-button"
            to={`/watch/${this.props.movie.id}`}
          >
            <i className="fas fa-play"></i> Play
          </Link>
          <h2 className="watch-now">Watch Now</h2>
          <p className="main-description">{this.props.movie.description}</p>
        </div>
        <div className="main-rating">{this.props.movie.rating}</div>
        {this.muteControl()}
      </div>
    );
  }
}

export default MainMovie;
