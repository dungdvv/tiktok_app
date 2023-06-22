import request from '~/request';

const following = {
  getFollowing: async () => {
    const response = await request.get('/following');
    const data = response.data;

    const following = data;

    return following;
  },
};

export default following;
