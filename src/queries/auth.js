import { useMutation } from 'react-query';
import auth from '~/services/auth';

const useLogin = () => {
  const { mutate: handleLogin, isLoading, data, error, } = useMutation(auth.login);

  return {
    handleLogin,
    isLoading,
    data,
    error
  };
};

export { useLogin };
