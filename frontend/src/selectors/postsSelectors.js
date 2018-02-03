import { createSelector } from 'reselect';

const getPostsIdsPerPage = (state, props) =>
  state.pagination.posts[props.match.params.pageNumber || 1];
const getPosts = state => state.posts;

export const getPageData = createSelector(
  [getPostsIdsPerPage, getPosts],
  ({ ids = [], prev, next } = {}, allPosts) => ({
    posts: ids.map(id => allPosts[id]),
    prev,
    next
  })
);

export const getPostById = (state, props) =>
  state.posts[props.match.params.postId];
