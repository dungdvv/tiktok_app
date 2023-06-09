import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faComment, faHeart, faMusic, faShare, faTags } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Item({ isFirstVideo }) {
  const videoRef = useRef();
  const containerVideoRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [following, setFollowing] = useState(false);

  const navigate = useNavigate();
  const handleFollow = () => {
    setFollowing(!following);
  };
  const FollowText = following ? 'Following' : 'Follow';
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const [like, setLike] = useState(false);
  const handleClick = () => {
    setLike(!like);
  };
  const heartColor = like ? '#fe2c55' : '#333';

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = containerVideoRef.current;
    if (currentTarget) return observer.observe(currentTarget);
    return () => observer.unobserve(currentTarget);
  }, [options]);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  return (
    <>
      <div className={cx('wrapper')}>
        <img
          src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/342645050_551831290354362_3746681521425656446_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sg7o5cIbbvMAX98jCch&_nc_ht=scontent.fhan17-1.fna&oh=00_AfD68J82oVfwLqj5LbRD2xPNf-X9vTotsoZiACoXx1M_Kw&oe=64967563"
          alt="Thu Thao"
        />

        <div className={cx('box-content')}>
          <div className={cx('content')}>
            <div className={cx('info')}>
              <div className={cx('info-left')}>
                <div className={cx('info-name')}>
                  <h3>
                    <Link to="/@thuthao">nguyenthuthao</Link>
                  </h3>
                  <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                  <p> Nguyễn Thu Thảo</p>
                </div>

                <span className={cx('content1')}>Nhiều lúc rất khó ở 😂</span>
                <span className={cx('music')}>
                  <FontAwesomeIcon icon={faMusic} />
                  <span>Original sound - legend never die</span>
                </span>
              </div>
              <button className={cx('button', { following })} onClick={handleFollow}>
                {FollowText}
              </button>
            </div>
          </div>
          <div className={cx('container')} ref={containerVideoRef}>
            {isVisible ? (
              <ReactPlayer
                ref={videoRef}
                className={cx('video')}
                playing={true}
                muted={false}
                url="https://www.youtube.com/embed/M5vCdwZ1HaY"
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
            ) : (
              <ReactPlayer
                className={cx('video')}
                muted={false}
                url="https://www.youtube.com/embed/M5vCdwZ1HaY"
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
            <div className={cx('list-icons')}>
              <FontAwesomeIcon
                onClick={handleClick}
                style={{ color: heartColor }}
                className={cx('icon')}
                icon={faHeart}
              />
              <span className={cx('value-heart')}>139.5k</span>
              <Link to="/video-detail/123">
                <FontAwesomeIcon className={cx('icon')} icon={faComment} />
              </Link>
              <span className={cx('value-comment')}>20k</span>
              <FontAwesomeIcon className={cx('icon')} icon={faTags} />
              <span className={cx('value-tags')}>12.5k</span>
              <FontAwesomeIcon className={cx('icon')} icon={faShare} />
              <span className={cx('value-share')}>2600</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Button /> */}
      <div className={cx('divier')} />
    </>
  );
}
export default Item;
