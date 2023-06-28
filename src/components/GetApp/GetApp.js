import classNames from 'classnames/bind';
import styles from './GetApp.module.scss';

import { useState } from 'react';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faDesktop, faMobile, faTablet } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function GetApp() {
  const [showBtn, setShowBtn] = useState(false);

  const handleShowBtn = () => {
    setShowBtn(true);
  };
  const hideButton = () => {
    setShowBtn(false);
  };
  return (
    <div>
      {!showBtn && (
        <button className={cx('btn-getApp')} onClick={handleShowBtn}>
          Get App
        </button>
      )}
      {showBtn && (
        <div className={cx('btnShow')}>
          <button className={cx('btnDesktop')}>
            <FontAwesomeIcon className={cx('desktop')} icon={faDesktop} />
            Get TikTok for Desktop
            <FontAwesomeIcon className={cx('close')} onClick={hideButton} icon={faClose} />
          </button>
          <div className={cx('divier')}></div>
          <button className={cx('btnMobile')}>
            <FontAwesomeIcon className={cx('mobile')} icon={faMobile} />
            Get TikTok App
          </button>
        </div>
      )}
    </div>
  );
}

export default GetApp;
