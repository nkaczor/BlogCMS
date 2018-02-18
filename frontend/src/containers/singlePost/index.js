import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts';
import { addComment } from '../../actions/comments';
import { getPostWithCommentsById } from '../../selectors/postsSelectors';
import Post from '../../components/post';
import Comments from '../../components/comments';
import CommentInput from '../../components/commentInput';
import { CommentShape, PostShape, PostDefaults } from '../../utils/propTypes';
import ShareFacebook from '../../components/shareFacebook';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  handleSubmit({ author, text }) {
    this.props.addComment({
      post: this.props.match.params.postId,
      comment_author: author,
      comment_text: text,
      comment_date: new Date()
    });
  }

  render() {
    const { post, comments } = this.props;

    return (
      <div>
        <Post {...post} />
        <ShareFacebook url={window.location.href} />
        <Comments comments={comments} />
        <CommentInput onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

SinglePost.propTypes = {
  post: PostShape,
  comments: PropTypes.arrayOf(CommentShape),
  fetchPost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
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
    ...bindActionCreators({ fetchPost, addComment }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
