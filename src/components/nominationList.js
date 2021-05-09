import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nomination from './nomination';
import { removeNomination } from '../actions/nominationActions';

class NominationList extends Component {
    render(){
        let nominations = this.props.nominations;
        let nominationList = '';
        nominationList = nominations.length > 0 ? <div className='row'>
            <div className='slogan'>Your Nomination List</div>
            {nominations.map((nomination, index) => <Nomination key={index} movie={nomination}/>)}</div> :
            <Link to='/'><div className='slogan'>Go nominate your favourite movies</div></Link>;
    
        return (
            <div className = 'nominationList'>
                {nominationList}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        nominations: state.userList.nominations
    };
};

export default connect(mapStateToProps, {removeNomination})(NominationList);