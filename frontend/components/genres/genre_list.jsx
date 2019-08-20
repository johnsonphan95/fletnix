import React from 'react';
import {Link} from 'react-router-dom';
import TileExpand from './tile_expand';


class GenreList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            count: 0,
            currPosition: 0,
            slideWidth: 0,
            arrowStyle: {}, 
            expand: "false"
        }
        this.shiftLeft = this.shiftLeft.bind(this);
        this.shiftRight = this.shiftRight.bind(this);
        this.handleListMouseEnter = this.handleListMouseEnter.bind(this);
        this.handleListMouseLeave = this.handleListMouseLeave.bind(this);
        this.handleArrowMouseOver = this.handleArrowMouseOver.bind(this);
        this.handleArrowMouseLeave = this.handleArrowMouseLeave.bind(this);
    }

    componentDidMount(){
        this.setState({slideWidth: (window.innerWidth * 0.92)/6}), 
        this.setState({length: this.props.moviesList.length})
    }

    shiftLeft(e){
        e.preventDefault(); 
    
        let count = this.state.count; 
        let curPos = this.state.currPosition;
        let slide = this.state.slideWidth;
        let length = this.state.length;
        if (count > 0 && count <= length - 6) {
            this.setState({
                currPosition: curPos + slide,
                count: count - 1
            })
        }
    }

    shiftRight(e){
        e.preventDefault();
    
        let count = this.state.count;
        let length = this.state.length;
        let curPos = this.state.currPosition; 
        let slide = this.state.slideWidth; 
     
        if (count >= 0 && count < length - 6){
            this.setState({
                currPosition: curPos - slide, 
                count: count + 1
            })
        }
    }

    handleListMouseEnter(){
        this.setState({
            arrowStyle: {
                background: `rgba(14, 14, 14, 0.4)`, 
                color: `grey`
            }
        })
    }

    handleListMouseLeave(){
        this.setState({
            arrowStyle: {
                background: `transparent`,
                color: `transparent`
            }
        })
    }

    handleArrowMouseOver(){
        this.setState({
            arrowStyle: {
                background: `rgba(14, 14, 14, 0.6)`,
                color: `white`
            }
        })
    }

    handleArrowMouseLeave(){
        this.setState({
            arrowStyle: {
                background: `rgba(14, 14, 14, 0.4)`,
                color: `grey`
            }
        })
    }

    render(){

        if (this.props.moviesList === undefined){
            return null
        }

        let listStyle = {
            transform: `translateX(${this.state.currPosition}px)`, 
            transition: `transform 500ms ease 0s`
        }
        
        let moviesLists = this.props.moviesList.map(id => {
            return(
                <li className="genre-list-li" key={id} >
                    <Link className="play-tile-button" to={`/watch/${id}`}><img src={this.props.movies[id].photoUrl} /></Link>
                </li>
            )
        })

        return (
            <div>
                <div className="genre-list-wrapper">
                    <div className="genre-list-label"><Link className="genre-link" to={`/browse/genres/${this.props.genre.id}`}>{this.props.genre.genre}</Link></div>
                    
                    <div className="genre-list" onMouseEnter={this.handleListMouseEnter} onMouseLeave={this.handleListMouseLeave}>

                        <div onClick={this.shiftLeft} onMouseOver={this.handleArrowMouseOver} onMouseLeave={this.handleArrowMouseLeave} className="arrow-button-left" id="arrow-button" style={this.state.arrowStyle}> <i className="fas fa-chevron-left"></i> </div>

                        <div onClick={this.shiftRight} onMouseOver={this.handleArrowMouseOver} onMouseLeave={this.handleArrowMouseLeave} className="arrow-button-right" id="arrow-button" style={this.state.arrowStyle}> <i className="fas fa-chevron-right"></i></div>

                        <ul className="genre-list-ul" style={listStyle}>
                            {moviesLists}
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}

export default GenreList;