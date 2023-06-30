import React, { useState } from 'react';

import './modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div onClick={onClose} className="modal">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
