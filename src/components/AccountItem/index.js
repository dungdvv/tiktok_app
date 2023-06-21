import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/342645050_551831290354362_3746681521425656446_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sg7o5cIbbvMAX98jCch&_nc_ht=scontent.fhan17-1.fna&oh=00_AfD68J82oVfwLqj5LbRD2xPNf-X9vTotsoZiACoXx1M_Kw&oe=64967563"
                alt="Thao"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Thu Thao</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyen Thi Thu Thao</span>
            </div>
        </div>
    );
}

export default AccountItem;


