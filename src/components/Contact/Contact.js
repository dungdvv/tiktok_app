import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx('contact-menu')}>
            <div className={cx('list-a')}>
                <a>About</a>
                <a>Newsroom</a>
                <a>Contact</a>
                <a>Career</a>
                <a>ByteDance</a>
            </div>
            <div className={cx('list-b')}>
                <a>Tiktok For Good</a>
                <a>Advertise</a>
                <a>Developers</a>
                <a>Transparency</a>
                <a>Tiktok Reward</a>
                <a>Tiktok Embeds</a>
            </div>
            <div className={cx('list-c')}>
                <a>Help</a>
                <a>Safety</a>
                <a>Term</a>
                <a>Privacy</a>
                <a>Creator Portal</a>
                <a>Community</a>
                <a>Guidelines</a>
            </div>
            <span>
                © 2023 Tiktok  
            </span>
        </div>
    );
}

export default Contact;
