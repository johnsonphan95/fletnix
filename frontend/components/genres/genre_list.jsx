import React from 'react';
import {Link} from 'react-router-dom';
import { Player } from 'video-react';


class GenreList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            // startIndex: 0, 
            // endIndex: 6,
            count: 0,
            currPosition: 0,
            slideWidth: 0,
            arrowStyle: {}, 
        }
        this.shiftLeft = this.shiftLeft.bind(this);
        this.shiftRight = this.shiftRight.bind(this);
        this.handleListMouseEnter = this.handleListMouseEnter.bind(this);
        this.handleListMouseLeave = this.handleListMouseLeave.bind(this);
        this.handleArrowMouseOver = this.handleArrowMouseOver.bind(this);
        this.handleArrowMouseLeave = this.handleArrowMouseLeave.bind(this);
    }

    componentDidMount(){
        // this.props.fetchMovies();
        this.setState({slideWidth: (window.innerWidth * 0.92)/6}), 
        this.setState({length: this.props.moviesList.length})
    }

    // componentWillUpdate(){
    //     window.scrollTo(0, 0)
    // }

    shiftLeft(e){
        e.preventDefault(); 
        // if (this.state.startIndex - 1 >= 0) {
        //     this.setState({
        //         startIndex: (this.state.startIndex - 1) ,
        //         endIndex: (this.state.endIndex - 1) 
        //     })
            
        // }
        let curPos = this.state.currPosition;
        let slide = this.state.slideWidth;
        // let length = this.state.length;
        console.log(slide);
        if (curPos < 0) {
            this.setState({
                currPosition: curPos + slide
            })
        }
    
    }

    shiftRight(e){
        e.preventDefault();
        
        // if (this.state.endIndex + 1 <= this.props.genre.moviesLength) {
        //     this.setState({
        //         startIndex: (this.state.startIndex + 1),
        //         endIndex: (this.state.endIndex + 1)
        //     })
        // }
        let length = this.state.length;
        let curPos = this.state.currPosition; 
        let slide = this.state.slideWidth; 
        let endPos = slide * (length - 6);
        console.log(slide);
        console.log(endPos)
        if (curPos >= -(endPos - 1)){
            this.setState({
                currPosition: curPos - slide
            })
        }
        console.log(curPos);
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
        
        // let moviesLists = this.props.moviesList.slice(this.state.startIndex, this.state.endIndex).map(id => {
        //     return(
        //         <li className="genre-list-li" key={id}>
        //             <Link className="play-button" to={`/watch/${id}`}><img width="100%" src={this.props.movies[id].photoUrl} /></Link>
        //         </li>
        //     )
        // })
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

                        <div onClick={this.shiftLeft} onMouseOver={this.handleArrowMouseOver} onMouseLeave={this.handleArrowMouseLeave} className="arrow-button-left" id="arrow-button" style={this.state.arrowStyle}> <i className="fas fa-angle-left"></i> </div>

                        <div onClick={this.shiftRight} onMouseOver={this.handleArrowMouseOver} onMouseLeave={this.handleArrowMouseLeave} className="arrow-button-right" id="arrow-button" style={this.state.arrowStyle}> <i className="fas fa-angle-right"></i></div>

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