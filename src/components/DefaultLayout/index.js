import classNames from 'classnames/bind';
import { useWindowSize } from '@uidotdev/usehooks';
import { tableBreakPoint } from 'src/constants';

import styles from './DefaultLayout.module.scss';
import TableSidebar from '../Sidebar/TableSidebar';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header';
import GetApp from '../GetApp/GetApp';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const { width } = useWindowSize();

  const sidebar = tableBreakPoint >= width ? <TableSidebar /> : <Sidebar />;

  return (
    <div className={cx('wrapper')}>
      <div className={cx('fixed-header')}>
        <Header />
      </div>
      <div className={cx('container')}>
        <div className={cx('fixed-sidebar')}>{sidebar}</div>
        <div className={cx('content')}>{children}</div>
      </div>
      <GetApp />
    </div>
  );
}

export default DefaultLayout;
