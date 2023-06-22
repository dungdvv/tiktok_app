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

const cx = classNames.bind(styles);

function Explore() {
  const { data: explore } = useGetExplore();

  

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('headers')}>
          <div className={cx('button')}>
            <FontAwesomeIcon icon={faMicrophone} />
            <span>Dancing</span>
          </div>
          <div className={cx('button')}>
            <FontAwesomeIcon icon={faVolleyball} />
            <span>Sports</span>
          </div>
          <div className={cx('button')}>
            <FontAwesomeIcon icon={faRedditAlien} />
            <span>Game</span>
          </div>
          <div className={cx('button')}>
            <FontAwesomeIcon icon={faPaintBrush} />
            <span>Comedy</span>
          </div>
          <div className={cx('button')}>
            <FontAwesomeIcon icon={faCar} />
            <span>Autos</span>
          </div>
          <div className={cx('button')}>
            <FontAwesomeIcon icon={faShoppingBag} />
            <span>Fashion</span>
          </div>
          <div className={cx('button')}>
            <FontAwesomeIcon icon={faCoffee} />
            <span>LifeStyle</span>
          </div>
        </div>

        <div className={cx('list-items')}>
          {explore.map((explores) => {
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
