import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const BackDrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onCartCloseHandler}></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onCartCloseHandler={props.onCartCloseHandler}></BackDrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay cartInfo={{ ...props.cartInfo }}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};
export default Modal;
