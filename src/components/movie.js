import { Component } from 'react';
import 'bootstrap';

class Movie extends Component {
    render(){
        let returnedMovie = this.props.movie;
        console.log(returnedMovie);
        return (
            <div className='col-md-4 mb-5 '>
                    <img className='img-responsive' src={returnedMovie.Poster} width='350' height='450' alt='Poster Unavailable'></img>
            </div>
        )
    }
}

export default Movie