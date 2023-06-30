import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
  ExploreIcon,
  ExploreActiveIcon,
} from '~/components/Icons';
import { routesConfig } from '~/routes';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import Contact from '~/components/Contact/Contact';

import Button from '~/components/Button';
import { useAuth } from '~/context/auth';
import Menu from './SideBarMenu';
import MenuItem from './SideBarMenuItem';

const cx = classNames.bind(styles);

function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={routesConfig.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={routesConfig.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="Explore" to={routesConfig.explore} icon={<ExploreIcon />} activeIcon={<ExploreActiveIcon />} />
        <MenuItem title="LIVE" to={routesConfig.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>

      {user && <SuggestedAccounts label="Following Account" />}

      {!user && (
        <div className={cx('title')}>
          <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
          <Button primary>Log in</Button>
        </div>
      )}

      <Contact />
    </aside>
  );
}

export default Sidebar;
