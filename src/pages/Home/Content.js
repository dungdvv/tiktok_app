import Item from './Item';

import './style.scss';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-body">
        <Item isFirstVideo={true} />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Home;
