// Pages
import Home from '~/pages/Home/Content';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live/Live';
import Explore from '~/pages/Explore/Explore';
import VideoDetail from '~/pages/VideoDetail';
import HeaderOnly from '~/components/HeaderOnly';

export const routesConfig = {
  home: '/',
  following: '/following',
  profile: '/@:nickname',
  upload: '/upload',
  search: '/search',
  live: '/live',
  explore: '/explore',
  videoDetail: '/video-detail/:id',
};

// Public routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.live, component: Live },
  { path: routesConfig.explore, component: Explore },
  { path: routesConfig.videoDetail, component: VideoDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
