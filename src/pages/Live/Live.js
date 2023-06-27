import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';
import VideoDetail from '../VideoDetail';
const cx = classNames.bind(styles);

function Live() {
  const videoRef = useRef();
  return (
    <div className={cx('wrapper')}>
      <ReactPlayer
        ref={videoRef}
        className={cx('video')}
        playing={true}
        muted={false}
        url=" https://youtu.be/JsRNJwQzh9c"
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
  );
}

export default Live;
