import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
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
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import Contact from '~/components/Contact/Contact';

import { useHeader } from '~/components/Layout/DefaultLayout/HeaderContext';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
  const { currentUser } = useHeader();

  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>

      {currentUser && <SuggestedAccounts label="Following Account" />}

      {!currentUser && (
        <div>
          <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
          <Button primary>Log in</Button>
        </div>
      )}

      <Contact />
    </aside>
  );
}

export default Sidebar;
