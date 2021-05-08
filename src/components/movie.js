import { Component } from 'react';
import { connect } from 'react-redux';
import { addNomination } from '../actions/nominationActions';
import 'bootstrap';

class Movie extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.props.addNomination(this.props.movie.imdbID);
    }

    render(){
        let returnedMovie = this.props.movie;
        return (
            <div className='col-md-4 mb-5 '>
                    <img className='img-responsive' src={returnedMovie.Poster} width='350' height='450' alt='Poster Unavailable'></img>
                    {this.props.imdbID.indexOf(returnedMovie.imdbID) >= 0 || this.props.nominations.length >= 5 ? 
                        <button disabled>Add</button> : <button onClick={this.handleClick}>Add</button>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nominations: state.userList.nominations,
        imdbID: state.userList.imdbID
    };
};

export default connect(mapStateToProps,{addNomination})(Movie);