import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <FontAwesomeIcon icon={faclose} />
                <h1 className={cx('title')}>Log in to TikTok</h1>
                <wrapper className={cx('list-button')}>
                    <button>
                        <FontAwesomeIcon icon={faQrcode} />
                        Use Qr code
                    </button>
                    <button>
                        <FontAwesomeIcon icon={fauser} />
                        Use phone /email /username
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faFacebook}/>
                        Continue with Facebook
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faGoogle}/>
                        ContiNue With Google
                    </button>
                </wrapper>
                <span className={cx('content')}>
                    By continuing, you agree to TikTok's Term of Service and Comfirm that you have read TikTok's Privacy Policy
                </span>
                <h3>
                    Don't have an account? 
                    <a className={cx('sign-up')}> Sign Up</a>
                </h3>
            </div>
        </div>
    );
}

export default Login;
