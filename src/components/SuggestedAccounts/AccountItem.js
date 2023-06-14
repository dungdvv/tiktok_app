import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles)
function AccountItem({nickName, nameId}) {
    return (  
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/321505065_462548979426851_8825617224940837387_n.jpg?stp=c0.27.200.200a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=oQuOLa-nQdcAX8ChjTw&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCB5EGhkrcTmaWYEJquen_MNf0PADXzBGj3V88lJlBJWw&oe=648D616E" alt="Dung Dao" aria-expanded="false"/>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>
                        FreZe
                    </strong>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Dao Van Viet Dung</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {}

export default AccountItem
