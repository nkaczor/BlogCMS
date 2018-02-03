import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import { getPageData } from '../../selectors/postsSelectors';
import PaginationNavigator from '../../components/paginationNavigator/';
import Post from '../../components/post';

class PostsList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.pageNumber !== prevProps.match.params.pageNumber
    ) {
      this.fetchData();
    }
  }

  fetchData() {
    this.props.fetchPosts(this.props.match.params.pageNumber);
  }

  render() {
    const { posts, prev, next, match: { params } } = this.props;
    console.log(this.props);
    return (
      <div>
        {posts.map(post => <Post key={post.id} showCommentsButton {...post} />)}
        <PaginationNavigator
          pageNumber={params.pageNumber}
          isPrev={prev}
          isNext={next}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...getPageData(state, props)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchPosts }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
