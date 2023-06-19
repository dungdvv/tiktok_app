import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faComment, faHeart, faMusic, faShare, faTags } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useElementOnScreen } from './Content';
import './video.scss';
import { isVisible } from '@testing-library/user-event/dist/utils';

const cx = classNames.bind(styles);

function Items() {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisibile]);
  return (
    <>
      <div
        className={cx('wrapper')}
        // onMouseEnter={handleMouseEnter}
        // onmouseleave={handleMouseLeave}
      >
        <img
          src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/342645050_551831290354362_3746681521425656446_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xp4yrgA5CMQAX8U6FnU&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBOiXftDm0Zsg4mJmpkPwWmaSytSl3c9CDQCf2KxPSnEA&oe=649086A3"
          alt="Thu Thao"
        />

        <div className={cx('box-content')}>
          <div className={cx('content')}>
            <div className={cx('info')}>
              <div className={cx('info-left')}>
                <div className={cx('info-name')}>
                  <h3> nguyenthuthao </h3>
                  <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                  <p> Nguyễn Thu Thảo</p>
                </div>

                <span className={cx('content1')}>Nhiều lúc rất khó ở 😂</span>
                <span className={cx('music')}>
                  <FontAwesomeIcon icon={faMusic} />
                  <span>Original sound - legend never die</span>
                </span>
              </div>
              <button className={cx('button')}>Follow</button>
            </div>
          </div>
          <div className={cx('container')}>
            <ReactPlayer
              className={cx('video')}
              ref={videoRef}
              onClick={handleVideo}
              muted={false}
              url="https://www.youtube.com/embed/M5vCdwZ1HaY"
              // controls={false}
              // loop={true}
              // onReady={() => handleVisibilityChange(inView)}
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

            <div className={cx('list-icons')}>
              <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
              <span className={cx('value-heart')}>139.5k</span>
              <FontAwesomeIcon className={cx('icon')} icon={faComment} />
              <span className={cx('value-comment')}>20k</span>
              <FontAwesomeIcon className={cx('icon')} icon={faTags} />
              <span className={cx('value-tags')}>12.5k</span>
              <FontAwesomeIcon className={cx('icon')} icon={faShare} />
              <span className={cx('value-share')}>2600</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('divier')} />
    </>
  );
}
export default Items;
