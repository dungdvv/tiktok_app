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

const cx = classNames.bind(styles);

function TableSidebar() {
  return (
    <aside>
      <Menu
        style={{
          borderRight: '1px solid #e4cece',
          paddingInline: '20px',
          height: '100%',
        }}
      >
        <MenuItem
          isSmall={false}
          style={{
            paddingRight: 0,
            marginRight: 0,
          }}
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          isSmall={false}
          style={{
            paddingRight: 0,
            marginRight: 0,
          }}
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          isSmall={false}
          style={{
            paddingRight: 0,
            marginRight: 0,
          }}
          to={config.routes.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreActiveIcon />}
        />
        <MenuItem
          isSmall={false}
          style={{
            paddingRight: 0,
            marginRight: 0,
          }}
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      {/* <SuggestedAccounts label="Following Account" />
      <Contact /> */}
    </aside>
  );
}

export default TableSidebar;
