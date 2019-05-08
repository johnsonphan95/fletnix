import React from 'react';

class MovieShow extends React.Component {

    render(){
        return(
          <div>
              {this.props.movieId}
          </div>
        )
    }
}

export default MovieShow;