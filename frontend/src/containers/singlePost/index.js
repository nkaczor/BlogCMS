import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts';
import { getPostWithCommentsById } from '../../selectors/postsSelectors';
import Post from '../../components/post';
import Comments from '../../components/comments';
import { CommentShape, PostShape, PostDefaults } from '../../utils/propTypes';

class SinglePost extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.postId !== prevProps.match.params.postId) {
      this.fetchData();
    }
  }

  fetchData() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { post, comments } = this.props;

    return (
      <div>
        <Post {...post} />
        <Comments comments={comments} />
      </div>
    );
  }
}

SinglePost.propTypes = {
  post: PostShape,
  comments: PropTypes.arrayOf(CommentShape),
  fetchPost: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired
};

SinglePost.defaultProps = {
  comments: [],
  post: PostDefaults
};

function mapStateToProps(state, props) {
  return {
    ...getPostWithCommentsById(state, props)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchPost }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
