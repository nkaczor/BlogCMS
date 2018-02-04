import React, { Component } from 'react';
import Comment from '../comment';
import './comments.css';

export default class Comments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <section className="comments-container">
        <h4>Comments</h4>
        <div className="comments">
          {comments.map(comment => <Comment key={comment.id} {...comment} />)}
        </div>
      </section>
    );
  }
}
