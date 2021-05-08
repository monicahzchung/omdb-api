import { Component } from 'react';
import { connect } from 'react-redux';
import Nomination from './nomination';
import { removeNomination } from '../actions/nominationActions';

class NominationList extends Component {
    render(){
        return (
            <div className='nominationList'>
                {this.props.nominations.map((nomination, index) => <Nomination key={index} movie={nomination}/>)}
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