import { useMutation, useQuery } from 'react-query';
import auth from '~/services/auth';

const useLogin = () => {
  const { mutate: handleLogin, isLoading, data, error } = useMutation(auth.login);

  return {
    handleLogin,
    isLoading,
    data,
    error,
  };
};
const useRegister = () => {
  const { mutate: handleRegister, isLoading, data, error } = useMutation(auth.register);

  return {
    handleRegister,
    isLoading,
    data,
    error,
  };
};

const useGetMe = () => {
  const { data, isFetched, isLoading } = useQuery(['get-me'], auth.getMe);

  return {
    data,
    isFetched,
    isLoading,
  };
};

export { useLogin, useGetMe, useRegister };
