import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { closeBanner } from '../actions/nominationActions';

class NominationsDone extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(){
        this.props.closeBanner();
    }
    render(){
        return (
            <Modal show={this.props.show} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <h2>the shoppies</h2>
                </Modal.Header>
                    <Modal.Body>You have completed your nominations!</Modal.Body>
                <Modal.Footer>
                    <button type='button' className='btn btn-light' onClick={this.handleClick}>
                        Close
                    </button>
                    <button type='button' className='btn btn-light' onClick={this.handleClick}>
                        <Link to='/nominations'>Go to your nominations!</Link>
                    </button>
                </Modal.Footer>
            </Modal>
        )
    };
};

const mapStateToProps = state => {
    return {
        show: state.userList.show
    };
};


export default connect(mapStateToProps,{closeBanner})(NominationsDone);