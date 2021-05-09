import { Component } from 'react';
import { connect } from 'react-redux';
import { addNomination, removeNomination } from '../actions/nominationActions';
import ActionModal from './actionModal';
import logo from '../unavailable.png';
import 'bootstrap';

class Movie extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            action: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.remove = this.remove.bind(this);
    }
    handleClick(){
        this.props.addNomination(this.props.movie.imdbID);
        if (this.props.nominations.length !== 4){
            this.setState({
                show: true,
                action: 'Added'
            })
            setTimeout(() => {
                this.setState({
                  show: false,
                  action: ''
                });
              }, 1000);
        }
        
    }
    remove(){
        this.props.removeNomination(this.props.movie.imdbID);
        this.setState({
            show: true,
            action: 'Removed'
        })
        setTimeout(() => {
            this.setState({
              show: false,
              action: ''
            });
          }, 1000);
    }

    render(){
        let returnedMovie = this.props.movie;
        return (
            <>
            <ActionModal show={this.state.show} action={this.state.action}/>
            <div className='col mb-5'>
                <div className='movie'>
                        <img className='poster' src={returnedMovie.Poster} alt={logo}></img>
                        <div className='overlay'>
                            <h6>{returnedMovie.Title + ' (' + returnedMovie.Year + ')'}</h6>
                            {this.props.nominations.length >= 5 ? <button hidden></button> : 
                        this.props.imdbID.indexOf(returnedMovie.imdbID) >= 0 ?<button className='button2' onClick={this.remove}>Remove Nomination</button> 
                        : <button className='button1' onClick={this.handleClick}>Nominate</button>}
                        </div>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nominations: state.userList.nominations,
        imdbID: state.userList.imdbID
    };
};

export default connect(mapStateToProps,{addNomination, removeNomination})(Movie);