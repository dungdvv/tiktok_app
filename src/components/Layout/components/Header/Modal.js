import React, { useState } from 'react';

import './modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faQrcode, faUser, faWalkieTalkie } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLine, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Modal = ({ isOpen, onClose, children, className }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="header">
              <h1 className="title"> Log in to TikTok</h1>
              <FontAwesomeIcon icon={faClose} onClick={handleClose} className="icon-close" />
            </div>
            <button className="modal-button">
              <FontAwesomeIcon icon={faQrcode} />
              <span>Use QR code</span>
            </button>
            <button className="modal-button">
              <FontAwesomeIcon icon={faUser} />
              <span>Use phone / email / username</span>
            </button>
            <button className="modal-button">
              <FontAwesomeIcon icon={faFacebook} />
              <span>Continue with Facebook</span>
            </button>
            <button className="modal-button">
              <FontAwesomeIcon icon={faGoogle} />
              <span>Continue with Google</span>
            </button>
            <button className="modal-button">
              <FontAwesomeIcon icon={faTwitter} />
              <span>Continue with Twitter</span>
            </button>
            <button className="modal-button">
              <FontAwesomeIcon icon={faLine} />
              <span>Continue with LINE</span>
            </button>
            <button className="modal-button">
              <FontAwesomeIcon icon={faWalkieTalkie} />
              <span>Continue with Kakaotalk</span>
            </button>
            <p>
              By continuing, you agree to TikTok's <strong>Terms Of Service</strong> and confirm that you have read
              Tiktok's <strong> Privacy Policy</strong>
            </p>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
