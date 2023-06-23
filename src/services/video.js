import request from "~/request";

const video = {
    getDetail: async () => {
        const response = await request.get('/video-detail');
        const video = response.data

        return video;
    }
};

export default video;

