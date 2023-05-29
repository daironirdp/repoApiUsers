import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ReactNode } from 'react'


interface ModalProps {
  show: boolean,
  handleClose: () => void,
  creating: boolean
  children: ReactNode

}



function ModalForm(props: ModalProps) {

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal fullscreen={'xl-down'} show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.creating ? 'Create User' : 'Modify User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {props.children}  </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalForm;





