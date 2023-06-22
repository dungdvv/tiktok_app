import { useMutation } from 'react-query';
import auth from '~/services/auth';

const useLogin = () => {
  const { mutate: handleLogin, isLoading } = useMutation(() => auth.login());

  return {
    handleLogin,
    isLoading,
  };
};

export { useLogin };
