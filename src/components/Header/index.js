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
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
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
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '~/pages/Search';

import { useWindowSize } from '@uidotdev/usehooks';
import { tableBreakPoint } from 'src/constants';

import london from 'src/assets/images/london.jpg';

import ModalLogin from './ModalLogin';
import { Link } from 'react-router-dom';
import { useAuth } from '~/context/auth';
import utilsLocalStorage from '~/utils/utilsLocalStorage';
import Menu from '../Popper/PopperMenu';

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
  const { user } = useAuth();
  const { width } = useWindowSize();

  // Handle logic
  const handleMenuChange = (menuItem) => {
    console.log({ menuItem });
    switch (menuItem.type) {
      case 'logout':
        utilsLocalStorage.deleteToken();
        window.location.reload();
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
    handleCloseModal();
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to="/">
          <img src={images.logo} alt="Tiktok" />
        </Link>
        {width > tableBreakPoint ? <Search /> : ''}
        <div className={cx('actions')}>
          {user ? (
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
              <ModalLogin isOpen={isOpen} onClose={handleCloseModal} />
            </>
          )}

          <Menu items={user ? MENU_ITEMS : userMenu} onChange={handleMenuChange}>
            {user ? (
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
