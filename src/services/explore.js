import request from '~/request';

const explore = {
  getExplore: async () => {
    const response = await request.get('/explore');
    const data = response.data;
    console.log(data);
    const explore = data;

    return explore;
  },
};

export default explore;
