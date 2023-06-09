import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/326025489_1178480679476952_6889594312483394006_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=EoDWM5-MndAAX90PYJV&_nc_ht=scontent.fhan2-4.fna&oh=00_AfD5P972QVqo_aLmAzNhVbGR0b5AZuJFbS8ZcqhW8KU8FQ&oe=6488097C"
                alt="Thao"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Thu Thao</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Thu Thao</span>
            </div>
        </div>
    );
}

export default AccountItem;


