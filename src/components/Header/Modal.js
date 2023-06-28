import React, { useState } from 'react';

import './modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
