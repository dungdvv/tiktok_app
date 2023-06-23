import { useQuery } from 'react-query';
import video from '~/services/video';

const useVideoDetail = () => {
  const { data, isFetched, isLoading } = useQuery(['get-video-detail'], video.getDetail, {
    initialData: {},
  });
  return {
    data,
    isFetched,
    isLoading,
  };
};

export { useVideoDetail };
