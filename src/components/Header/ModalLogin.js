import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faQrcode, faUser, faWalkieTalkie } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLine, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Modal from './Modal';
import { useEffect, useMemo, useState } from 'react';
import { useLogin, useRegister } from '~/queries/auth';
import utilsLocalStorage from '~/utils/utilsLocalStorage';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';

const LoginByUserPassword = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorState, setErrorState] = useState();

  const { handleLogin, isLoading, data, error } = useLogin();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setErrorState('Vui lòng nhập đầy đủ thông tin');
    } else {
      setErrorState();
    }
    handleLogin({ username, password });
  };

  useEffect(() => {
    if (data?.data?.token) {
      utilsLocalStorage.setToken(data?.data?.token);
      window.location.reload(true);
    }
  }, [data]);

  if (isLoading) <div>Loading ...</div>;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ color: 'red' }}>
        {errorState ? errorState : !!error?.response?.data?.message && error.response.data.message}
      </div>
      <input
        style={{ border: '1px solid black;', padding: 20 }}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="username"
      />
      <input
        style={{ border: '1px solid black;', padding: 20 }}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="password"
      />
      <Button primary type="submit">
        Submit
      </Button>
    </form>
  );
};

const RegisterForm = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorState, setErrorState] = useState();

  const { handleRegister, isLoading, data, error } = useRegister();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password || !email) {
      setErrorState('Vui lòng nhập đầy đủ thông tin');
    } else {
      setErrorState();
    }
    handleRegister({ email, username, password });
  };

  useEffect(() => {
    if (data?.data?.user) {
      window.location.reload(true);
    }
  }, [data]);

  if (isLoading) <div>Loading ...</div>;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ color: 'red' }}>
        {errorState ? errorState : !!error?.response?.data?.message && error.response.data.message}
      </div>
      <input
        style={{ border: '1px solid black;', padding: 20 }}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="email"
      />
      <input
        style={{ border: '1px solid black;', padding: 20 }}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="username"
      />
      <input
        style={{ border: '1px solid black;', padding: 20 }}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="password"
      />
      <Button primary type="submit">
        Submit
      </Button>
    </form>
  );
};

const loginTypes = {
  LoginByUserPassword,
  RegisterForm,
};

const ModalLogin = ({ isOpen, handleCloseModal }) => {
  const [type, setType] = useState();
  const FormLogin = useMemo(() => loginTypes[type], [type]);

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      {type ? (
        <FormLogin />
      ) : (
        <>
          <div className="header">
            <h1 className="title"> Log in to TikTok</h1>
            <FontAwesomeIcon icon={faClose} className="icon-close" />
          </div>
          <button className="modal-button">
            <FontAwesomeIcon icon={faQrcode} />
            <span>Use QR code</span>
          </button>
          <button className="modal-button" onClick={() => setType('LoginByUserPassword')}>
            <FontAwesomeIcon icon={faUser} />
            <span>Use phone / email / username</span>
          </button>
          <button className="modal-button">
            <FontAwesomeIcon icon={faFacebook} />
            <span>Continue with Facebook</span>
          </button>
          <button className="modal-button">
            <FontAwesomeIcon icon={faGoogle} />
            <span>Continue with Google</span>
          </button>
          <button className="modal-button">
            <FontAwesomeIcon icon={faTwitter} />
            <span>Continue with Twitter</span>
          </button>
          <button className="modal-button">
            <FontAwesomeIcon icon={faLine} />
            <span>Continue with LINE</span>
          </button>
          <button className="modal-button">
            <FontAwesomeIcon icon={faWalkieTalkie} />
            <span>Continue with Kakaotalk</span>
          </button>
          <p>
            By continuing, you agree to TikTok's <strong>Terms Of Service</strong> and confirm that you have read
            Tiktok's <strong> Privacy Policy</strong>
          </p>
        </>
      )}

      {type === 'RegisterForm' ? (
        <div>
          Chưa có tài khoảng?
          <span onClick={() => setType('LoginByUserPassword')} style={{ color: 'red', cursor: 'pointer' }}>
            Đăng nhập
          </span>
        </div>
      ) : (
        <div>
          Chưa có tài khoảng?
          <span onClick={() => setType('RegisterForm')} style={{ color: 'red', cursor: 'pointer' }}>
            Đăng ký
          </span>
        </div>
      )}
    </Modal>
  );
};

export default ModalLogin;
