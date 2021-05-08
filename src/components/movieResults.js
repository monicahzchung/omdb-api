import { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './movie';

class MovieResults extends Component {
    render(){
        let returnedList = this.props.movies;
        let movieList = '';

        if (returnedList.Response){
            movieList = returnedList.Search.slice(0,9).map((movie, index)=> <Movie key={index} movie={movie}/>);
        };

        return(
            <div className='row'>
                    {movieList}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        movies: state.omdb.movieList
    }
}

export default connect(mapStateToProps)(MovieResults);