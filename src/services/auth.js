import request from '~/request';

const auth = {
  login: (username, password) => {
    const payload = {
      username,
      password,
    };

    const response = request.post('/login', payload);
  },
  register: () => {},
};

export default auth;
