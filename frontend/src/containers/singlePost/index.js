import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import { getPostById } from '../../selectors/postsSelectors';
import Post from '../../components/post';

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
    // this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Post {...post} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    post: getPostById(state, props)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchPosts }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
