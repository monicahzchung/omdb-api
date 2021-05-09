import { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './movie';

class MovieResults extends Component {
    render(){
        let returnedList = this.props.movies;
        console.log(returnedList);
        let movieList = '';

        if (returnedList.length !== 0){
            movieList = returnedList.Search.slice(0,9).map((movie, index)=> <Movie key={index} movie={movie}/>);
        };

        return(
            <div className = 'row row-cols-3'>
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