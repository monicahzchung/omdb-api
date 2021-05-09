import Modal from 'react-bootstrap/Modal';


const ActionModal = (props) => {
    return (
        <Modal show={props.show}>
                 <Modal.Header closeButton>
                    <div className='modalHeader'>the shoppies</div>
                </Modal.Header>
                    <Modal.Body>{props.action}</Modal.Body>
            </Modal>
    )
};


export default ActionModal