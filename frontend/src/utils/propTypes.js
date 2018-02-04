import { PropTypes } from 'prop-types';

/* Types */

export const PostPropTypes = {
  id: PropTypes.number,
  postTitle: PropTypes.string,
  postText: PropTypes.string,
  postDate: PropTypes.string
};

export const CommentPropTypes = {
  commentAuthor: PropTypes.string,
  commentText: PropTypes.string.isRequired,
  commentDate: PropTypes.string.isRequired
};

/* Shapes */

export const PostShape = PropTypes.shape({
  ...PostPropTypes
});

export const CommentShape = PropTypes.shape({
  ...CommentPropTypes
});

/* Defaults: */

export const CommentDefaults = {
  commentAuthor: 'Anonymous'
};

export const PostDefaults = {
  postTitle: '',
  postText: '',
  postDate: ''
};
