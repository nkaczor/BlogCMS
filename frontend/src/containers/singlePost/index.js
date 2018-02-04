import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts';
import { getPostWithCommentsById } from '../../selectors/postsSelectors';
import Post from '../../components/post';
import Comments from '../../components/comments';

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
