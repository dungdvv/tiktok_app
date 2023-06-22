// React. hooks of react (useState, ...)

// packages UI

// packages libs, package hooks

// Components

// Images, Videos, file dox

// styles

// interface

// constants

/**
 *
 */

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMessage,
  faCoins,
  faGear,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '~/pages/Search';

import { useWindowSize } from '@uidotdev/usehooks';
import { tableBreakPoint } from 'src/constants';

import london from 'src/assets/images/london.jpg';
import { createContext, useContext, useMemo, useState } from 'react';
import Modal from './Modal';
import { useHeader } from '../../DefaultLayout/HeaderContext';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'EN',
          title: 'English',
        },
        {
          type: 'language',
          code: 'Vi',
          title: 'Tieng Viet',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback & Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard',
  },
];

function Header() {
  const { currentUser, setCurrentUser } = useHeader();

  const { width } = useWindowSize();

  // Handle logic
  const handleMenuChange = (menuItem) => {
    console.log({ menuItem });
    switch (menuItem.type) {
      case 'logout':
        setCurrentUser(false);
        break;
      case 'language':
        // handle change lange
        break;
      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@thuthao',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '#!',
      separate: true,
      type: 'logout',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    setCurrentUser(true);
    handleCloseModal();
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        {width > tableBreakPoint ? <Search /> : ''}
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary onClick={handleOpenModal}>
                Log in
              </Button>
              <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <Button primary onClick={handleLogin}>
                  Confirm Log gin
                </Button>
              </Modal>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img className={cx('user-avatar')} src={london} alt="Nguyen Thu Thao" />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
