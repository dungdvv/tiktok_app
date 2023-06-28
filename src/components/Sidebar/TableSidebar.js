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
import Menu from './SideBarMenu';
import MenuItem from './SideBarMenuItem';

const cx = classNames.bind(styles);

function TableSidebar() {
  return (
    <aside>
      <Menu
        style={{
          borderRight: '1px solid #ececec',
          paddingInline: '10px',
          height: '100vh',
        }}
      >
        <MenuItem
          isSmall={false}
          style={{
            paddingRight: 0,
            marginRight: 0,
          }}
          to={routesConfig.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          isSmall={false}
          style={{
            paddingRight: 0,
            marginRight: 0,
          }}
          to={routesConfig.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          isSmall={false}
          style={{
            paddingRight: 0,
            marginRight: 0,
          }}
          to={routesConfig.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreActiveIcon />}
        />
        <MenuItem
          isSmall={false}
          style={{
            paddingRight: 0,
            marginRight: 0,
            borderBottom: '1px solid #ececec',
          }}
          to={routesConfig.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
        {/* <Button /> */}
      </Menu>
      {/* <SuggestedAccounts label="Following Account" />
      <Contact /> */}
    </aside>
  );
}

export default TableSidebar;
