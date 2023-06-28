import request from '~/request';

const auth = {
  getMe: async () => {
    const response = await request.get('auth/me');

    const user = response.data?.user ?? undefined;

    return user;
  },
  login: ({ username, password }) => {
    const payload = {
      username,
      password,
    };

    const response = request.post('auth/login', payload);

    return response;
  },
  register: ({ email, username, password }) => {
    const payload = {
      email,
      username,
      password,
    };

    const response = request.post('auth/register', payload);

    return response;
  },
};

export default auth;
