import React, { Component } from 'react';
import moment from 'moment';
import avatar from '../../images/avatar_female.png';
import './comment.css';

export default class Comment extends Component {
  render() {
    const { commentText, commentDate, commentAuthor } = this.props;
    console.log(this.props);
    return (
      <article className="comment">
        <img src={avatar} />
        <h4>
          <a href="#">{commentAuthor}</a>
        </h4>
        <time>{moment(commentDate).fromNow()}</time>
        <like />
        <p>{commentText}</p>
      </article>
    );
  }
}
