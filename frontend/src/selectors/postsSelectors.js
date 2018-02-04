import { createSelector } from 'reselect';

const getPostsIdsPerPage = (state, props) =>
  state.pagination.posts[props.match.params.pageNumber || 1];

const getPostById = (state, props) => state.posts[props.match.params.postId];

const getPosts = state => state.posts;
const getComments = state => state.comments;

export const getPageData = createSelector(
  [getPostsIdsPerPage, getPosts],
  ({ ids = [], prev, next } = {}, allPosts) => ({
    posts: ids.map(id => allPosts[id]),
    prev,
    next
  })
);

export const getPostWithCommentsById = createSelector(
  [getPostById, getComments],
  ({ comments: commentsIds = [], ...post } = {}, comments) => ({
    post,
    comments: commentsIds.map(id => comments[id])
  })
);
