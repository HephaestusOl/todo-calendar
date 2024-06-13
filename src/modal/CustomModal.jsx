import React from 'react';
import Modal from 'react-modal';
import './CustomModal.css';
import CloseIcon from './close-icon.png'

export const CustomModal = ({isOpen, onClose, children}) => {
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
    >
      <button className='modal-close-button' onClick={() => onClose()}>
        <img className='close-icon' src={CloseIcon} alt='close icon'/>
      </button>
      {children}
    </Modal>
  )
}
