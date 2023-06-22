import { useQuery } from 'react-query';

import explore from '~/services/explore';

const useGetExplore = () => {
  const { data, isLoading } = useQuery(['getExplore'], explore.getExplore, {
    initialData: [],
  });

  return {
    data,
    isLoading,
  };
};

export { useGetExplore };
