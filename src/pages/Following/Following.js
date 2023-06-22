import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import { useGetFollowing } from '~/queries/following';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Following({ isFirstVideo }) {
  const { data: following } = useGetFollowing();

  return (
    <div style={{ maxWidth: '800px', display: 'flex', flexWrap: 'wrap', gap: '0 20px' }}>
      {following.map((follow) => {
        return (
          <div className={cx('wrapper')}>
            <div className={cx('video')}>
              <ReactPlayer
                className={cx('video')}
                playing={false}
                muted={true}
                url={follow?.video ?? 'https://www.youtube.com/embed/M5vCdwZ1HaY'}
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
            </div>
            <div className={cx('body')}>
              <img src={follow?.avatar} />
              <h3>{follow?.userName}</h3>
              <div className={cx('title')}>
                <span>{follow?.fullName}</span>
                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
              </div>
              <CheckFollow />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const CheckFollow = ({}) => {
  const [check, setCheck] = useState(false);
  return (
    <button className={cx(check ? 'Following' : '')} onClick={() => setCheck((prev) => !prev)}>
      {check ? 'Following' : 'Follow'}
    </button>
  );
};

export default Following;
