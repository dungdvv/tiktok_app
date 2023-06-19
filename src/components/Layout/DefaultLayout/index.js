import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Header/Sidebar/Sidebar';
import GetApp from '../components/Header/GetApp/GetApp';
import TableSidebar from '../components/Header/Sidebar/TableSidebar';
import { useWindowSize } from '@uidotdev/usehooks';
import { tableBreakPoint } from 'src/constants';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const { width } = useWindowSize();

  const sidebar = tableBreakPoint >= width ? <TableSidebar /> : <Sidebar />;

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        {sidebar}
        <div className={cx('content')}>{children}</div>
      </div>
      <GetApp />
    </div>
  );
}

export default DefaultLayout;
