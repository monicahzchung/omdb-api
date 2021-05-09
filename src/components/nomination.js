import { Component } from 'react';
import { connect } from 'react-redux';
import { removeNomination } from '../actions/nominationActions';
import logo from '../unavailable.png';

class Nomination extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.removeNomination(this.props.movie.imdbID);
    }
    render(){
        let nomination = this.props.movie;
        console.log(nomination);
        return (
            <div className='container'>
                <div className='nomination'>
                    <div className='row'>
                        <div className='col-4'>
                        <a href={'https://www.imdb.com/title/' + nomination.imdbID + '/'}>
                            <img className='img-responsive' src={nomination.Poster} alt={logo}></img> 
                        </a>
                        </div>
                        <div className='col-8'>
                            <h2>{nomination.Title + ' (' + nomination.Year + ')'}</h2>
                            <h4>{nomination.Director}</h4>
                            <h4>{nomination.Runtime}</h4>
                            <h4>{nomination.Rated}</h4>
                            <h4>{nomination.Plot}</h4>
                            <h4>{nomination.Genre}</h4>
                            <h4>{'IMDB Rating ' + nomination.imdbRating }</h4>
                            <h4>{nomination.imdbVotes + ' IMDB Votes'}</h4>
                        
                            <button className='button1' onClick={this.handleClick}>Remove</button>
                        </div>
                        
                    </div>
                    <br></br>
                </div>
            </div>
        )
    };
};

export default connect(null,{removeNomination})(Nomination);