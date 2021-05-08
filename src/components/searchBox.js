import { Component } from 'react';
import { connect } from 'react-redux';
import { changeSearch, retrieveMovies } from '../actions/movieActions';
import 'bootstrap';

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

    };
    onChange(event){
        this.props.changeSearch(event.target.value);
    };
    handleSubmit(event){
        event.preventDefault();
        this.props.retrieveMovies(this.props.input);
    };
    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                        <input className='form-control' onChange={this.onChange} placeholder='Search your favourite movies...'></input>
                </form>
                <br></br>
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        input: state.omdb.input
    };
};


export default connect(mapStateToProps,{changeSearch, retrieveMovies})(SearchBox);