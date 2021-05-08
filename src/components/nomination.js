import { Component } from 'react';
import { connect } from 'react-redux';
import { removeNomination } from '../actions/nominationActions';

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
        return (
            <div>
                <h1>{nomination.Title}</h1>
                <button className='button1' onClick={this.handleClick}>Remove</button>
            </div>
        )
    };
};

export default connect(null,{removeNomination})(Nomination);