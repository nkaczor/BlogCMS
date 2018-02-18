import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Label, PageHeader } from 'react-bootstrap';
import constants from '../../utils/constants';
import { PostPropTypes } from '../../utils/propTypes';

import './post.css';

export default class Post extends Component {
  renderButton() {
    // TODO: extract new component
    const { id, showCommentsButton } = this.props;

    if (!showCommentsButton) {
      return null;
    }

    return (
      <Link to={`/post/${id}`}>
        <div className="post-button">
          <Label>See comments</Label>
        </div>
      </Link>
    );
  }

  render() {
    const { postTitle, postText, postDate, id } = this.props;

    return (
      <div className="post">
        <Link to={`/post/${id}`}>
          <PageHeader className="post-header">
            {postTitle}
            <div className="post-info">
              Posted by {constants.AUTHOR}, on
              <time title={postDate}>
                {moment(postDate).format(' MMMM Do YYYY')}
              </time>
            </div>
          </PageHeader>
        </Link>
        <article className="post-content">{postText}</article>
        {this.renderButton()}
      </div>
    );
  }
}

Post.propTypes = {
  ...PostPropTypes,
  showCommentsButton: PropTypes.bool
};

Post.defaultProps = {
  showCommentsButton: false
};
