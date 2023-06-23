import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Header/Sidebar/Sidebar';
import GetApp from '../components/Header/GetApp/GetApp';
import TableSidebar from '../components/Header/Sidebar/TableSidebar';
import { useWindowSize } from '@uidotdev/usehooks';
import { tableBreakPoint } from 'src/constants';
import { HeaderProvider } from './HeaderContext';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const { width } = useWindowSize();

  const sidebar = tableBreakPoint >= width ? <TableSidebar /> : <Sidebar />;

  return (
    <HeaderProvider>
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
    </HeaderProvider>
  );
}

export default DefaultLayout;
