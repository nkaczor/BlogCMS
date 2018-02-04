import React from 'react';
import moment from 'moment';
import { CommentPropTypes, CommentDefaults } from '../../utils/propTypes';
import avatar from '../../images/avatar_female.png';
import './comment.css';

export default function Comment(props) {
  return (
    <article className="comment">
      <img alt="user avatar" src={avatar} />
      <h4>{props.commentAuthor}</h4>
      <time>{moment(props.commentDate).fromNow()}</time>
      <p>{props.commentText}</p>
    </article>
  );
}

Comment.propTypes = CommentPropTypes;
Comment.defaultProps = CommentDefaults;
