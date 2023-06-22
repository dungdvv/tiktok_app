import { useQuery } from 'react-query';

import following from '~/services/following';

const useGetFollowing = () => {
  const { data, isLoading } = useQuery(['getFollowing'], following.getFollowing, {
    initialData: [],
  });

  return {
    data,
    isLoading,
  };
};

export { useGetFollowing };
