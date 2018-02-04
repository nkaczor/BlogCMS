import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import { getPageData } from '../../selectors/postsSelectors';
import PaginationNavigator from '../../components/paginationNavigator';
import Post from '../../components/post';
import { PostShape } from '../../utils/propTypes';

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

PostsList.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  prev: PropTypes.bool,
  next: PropTypes.bool,
  posts: PropTypes.arrayOf(PostShape),
  fetchPosts: PropTypes.func.isRequired
};

PostsList.defaultProps = {
  posts: [],
  prev: false,
  next: false
};

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
