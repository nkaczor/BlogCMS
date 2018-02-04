import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';
import { CommentShape } from '../../utils/propTypes';
import './comments.css';

export default function Comments(props) {
  return (
    <section className="comments-container">
      <h4>Comments</h4>
      <div className="comments">
        {props.comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(CommentShape)
};

Comments.defaultProps = {
  comments: []
};
