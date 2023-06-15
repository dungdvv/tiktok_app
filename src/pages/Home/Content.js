import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faComment, faHeart, faMusic, faShare, faTag, faTags } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img
                    src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/342645050_551831290354362_3746681521425656446_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xp4yrgA5CMQAX8U6FnU&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBOiXftDm0Zsg4mJmpkPwWmaSytSl3c9CDQCf2KxPSnEA&oe=649086A3"
                    alt="Thu Thao"
                />
                <div className={cx('info')}>
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
            <div className={cx('container')}>
                <video controls className={cx('video')}>
                    <source src="https://www.tiktok.com/@thuat2210/video/7244381244572650757?is_from_webapp=1&sender_device=pc"></source>
                </video>
                <div className={cx('list-icons')}>
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faTags} />
                    <FontAwesomeIcon icon={faShare} />
                </div>
            </div>
        </div>
    );
}

export default Home;
