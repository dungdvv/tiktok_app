import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useSet } from '@uidotdev/usehooks';
import { useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsernameChange = (event) =>{
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.prevenDefault()
        axios.post('/db.json/login', {username, password})
            .then(response =>{
                //Login successfull
                loca
            })
    }
    return (
        <div className={cx('body')}>
           
        </div>
    );
}

export default Login;
