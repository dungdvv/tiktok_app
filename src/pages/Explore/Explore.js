import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faCoffee,
  faHeart,
  faMicrophone,
  faPaintBrush,
  faShoppingBag,
  faVolleyball,
} from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import ReactPlayer from 'react-player';
import explore from '~/services/explore';
import { useGetExplore } from '~/queries/explore';
import { useState } from 'react';

const cx = classNames.bind(styles);
// const iframe = document.getElementById('my-iframe');
// iframe.removeAttribute('allow');

function Explore() {
  const { data: explore } = useGetExplore();

  const buttons = [
    {
      icon: faMicrophone,
      label: 'Dancing',
      handleClick: () => setShowList('Dancing'),
    },
    {
      icon: faRedditAlien,
      label: 'Game',
      handleClick: () => setShowList('Game'),
    },
    {
      icon: faPaintBrush,
      label: 'Comedy',
      handleClick: () => setShowList('Comedy'),
    },
    {
      icon: faCar,
      label: 'Autos',
      handleClick: () => setShowList('Autos'),
    },
    {
      icon: faShoppingBag,
      label: 'Fashion',
      handleClick: () => setShowList('Fashion'),
    },
    {
      icon: faCoffee,
      label: 'LifeStyle',
      handleClick: () => setShowList('LifeStyle'),
    },
    {
      icon: faVolleyball,
      label: 'Sports',
      handleClick: () => setShowList('Sports'),
    },
  ];

  const [showList, setShowList] = useState('Dancing');

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('headers')}>
          {buttons.map((button) => (
            <div className={cx('button')} key={button.label}>
              <FontAwesomeIcon icon={button.icon} />
              <span onClick={button.handleClick}>{button.label}</span>
            </div>
          ))}
        </div>

        <div className={cx('list-items')}>
          {explore
            .filter((explore) => explore.category === showList)
            .map((explores) => {
              return (
                <div className={cx('video-item')}>
                  <ReactPlayer
                    //   ref={videoRef}
                    className={cx('video')}
                    playing={true}
                    muted={false}
                    url={explores?.video ?? 'https://www.youtube.com/embed/M5vCdwZ1HaY'}
                    config={{
                      youtube: {
                        playerVars: {
                          modestbranding: 1,
                          disablekb: 1,
                          cc_load_policy: 0,
                          playsinline: 1,
                          controlsList: 'nodownload',
                        },
                      },
                    }}
                  />
                  <div>{explores?.description}</div>
                  <footer className={cx('footer')}>
                    <img />
                    <span>{explores?.profile}</span>
                    <FontAwesomeIcon icon={faHeart} />
                    {explore?.faHeart}
                  </footer>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Explore;
