import { Component } from 'react';
import { connect } from 'react-redux';
import { addNomination } from '../actions/nominationActions';
import logo from '../unavailable.png';
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
            <div className='col mb-5'>
                <div className='movie'>
                        <img className='img-responsive' src={returnedMovie.Poster} width='300' height='450' alt={logo}></img>
                        <div className='overlay'>
                            <h6>{returnedMovie.Title + ' (' + returnedMovie.Year + ')'}</h6>
                            {this.props.nominations.length >= 5 ? <button hidden></button> : 
                        this.props.imdbID.indexOf(returnedMovie.imdbID) >= 0 ?<button className='button2' disabled>Nominated</button> 
                        : <button className='button1' onClick={this.handleClick}>Nominate</button>}
                        </div>
                </div>
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