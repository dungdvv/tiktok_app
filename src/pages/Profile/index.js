import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import { faKey, faLock, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Profile() {
  const [active, setActive] = useState('video');
  const handleClick = (className) => {
    setActive(className);
    alert('done');
  };
  return (
    <div className="wrapper">
      <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7241410542441594886~c5_100x100.jpeg?x-expires=1687935600&x-signature=J2j36GBV3fq7xBu5wlyV3GMengg%3D" />

      <div className="body">
        <div className="header">
          <h3> FreZeinLuv</h3>
          <p> dungdao2212</p>
          <button>
            <FontAwesomeIcon icon={faShareFromSquare} className="icon" />
            Edit ProFile
          </button>
        </div>
        <div className="follow">
          <span>
            <strong>0</strong>
            Following
          </span>
          <span>
            <strong>0</strong>
            Follower
          </span>
          <span>
            <strong>0</strong>
            likes
          </span>
        </div>
        <p>No Bio Yet.</p>
        <div className="show-video">
          <div className={`video ${active === 'video' ? 'active' : ''}`} onClick={() => handleClick('video')}>
            <span> Videos</span>
          </div>
          <div
            className={`favorites ${active === 'favorites' ? 'active' : ''}`}
            onClick={() => handleClick('favorites')}
          >
            <FontAwesomeIcon icon={faLock} className="icon" />
            <span>Favorites</span>
          </div>
          <div className={`liked ${active === 'liked' ? 'active' : ''}`} onClick={() => handleClick('liked')}>
            <FontAwesomeIcon icon={faLock} className="icon" />
            <span>Liked</span>
          </div>
        </div>
      </div>
      <div className='share'>
        <FontAwesomeIcon icon={faShare}/>
      </div>
    </div>
  );
}

export default Profile;
