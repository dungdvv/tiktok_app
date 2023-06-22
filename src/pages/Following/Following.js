import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import { useGetFollowing } from '~/queries/following';

const cx = classNames.bind(styles);
function Following({ isFirstVideo }) {
  const videoRef = useRef();
  const containerVideoRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [check, setCheck] = useState(false);

  const { data: following } = useGetFollowing();
  const HandleFollow = () => {
    setCheck(!check);
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      const currentTarget = containerVideoRef.current;
      if (currentTarget) return observer.observe(currentTarget);
      return () => observer.unobserve(currentTarget);
    }, [options]);
    console.log({
      isVisible,
    });

    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };
  };

  return (
    <>
      {following.map((follow) => {
        return (
          <div className={cx('wrapper')}>
            <div className={cx('video')}>
              {isVisible ? (
                <>
                  <ReactPlayer
                    ref={videoRef}
                    className={cx('video')}
                    playing={false}
                    muted={true}
                    url={follow?.video ?? 'https://www.youtube.com/embed/M5vCdwZ1HaY'} // show default video if not follow?.video
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
                </>
              ) : (
                <ReactPlayer
                  className={cx('video')}
                  muted={false}
                  url={follow?.video ?? 'https://www.youtube.com/embed/M5vCdwZ1HaY'} // show default video if not follow?.video
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
              )}
            </div>
            <div className={cx('body')}>
              <img src={follow?.avatar} />
              <h3>{follow?.userName}</h3>
              <div className={cx('title')}>
                <span>{follow?.fullName}</span>
                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
              </div>
              <button className={cx(check ? 'Following' : '')} onClick={HandleFollow}>
                {check ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Following;
