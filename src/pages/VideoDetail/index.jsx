import React, { useEffect, useState } from 'react';
import Item from '../Home/Item';

import './styles.scss';
import { useVideoDetail } from '~/queries/video';

const VideoDetail = () => {
  const { data, isFetched, isLoading } = useVideoDetail();

  const [commentsState, setCommentsState] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleDelete = (idInput) => {
    const filtered = commentsState.filter(({ id }) => id !== idInput);
    setCommentsState(filtered);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    setCommentsState((prev) => [
      ...prev,
      {
        id: Math.random() * 1.3246,
        author: 'default',
        text: commentInput,
        likes: 0,
        img: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/355670515_6291234590989603_3430139154399458327_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=IFKfL5t5QO0AX836uTP&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCrrEZ-jT0-JCMALPO-JOrI6iO2SDsALhtAeq5xQZuk-g&oe=649AA2A9',
      },
    ]);

    // reset fields
    setCommentInput('');
  };

  useEffect(() => {
    const { video, comments = [] } = data || {};

    setCommentsState(comments);
  }, [isFetched]);

  if (isLoading) return <h1>...</h1>;

  return (
    <div className="video-detail">
      <div className="video">
        <Item />
      </div>
      <div className="section-comment">
        <ul className="comments">
          <h2>Comments </h2>
          {commentsState.map(({ text, author, id, img }) => {
            return (
              <div className="comment-item">
                <img className="img-avatar" src={img} />
                <div className="user">
                  <p>{author}</p>
                </div>
                <p>{text}</p>
                <button className="button-send" onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </ul>

        <form onSubmit={handleSubmitForm} className="form-comment">
          <input
            onChange={({ target }) => setCommentInput(target.value)}
            value={commentInput}
            className="input-comment"
            type="text"
            name="Add comments...."
          />
          <button type="submit" className="button-submit-comment">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoDetail;
