import { combineReducers } from 'redux';
import { RECEIVE_POSTS_PAGE, REQUEST_POSTS_PAGE } from '../actions/posts';

const posts = (pages = {}, action = {}) => {
  switch (action.type) {
    case REQUEST_POSTS_PAGE:
      return {
        ...pages,
        [action.page]: {
          ids: [],
          fetching: true
        }
      };
    case RECEIVE_POSTS_PAGE:
      return {
        ...pages,
        [action.page]: {
          next: action.next,
          prev: action.prev,
          ids: action.posts.map(post => post.id),
          fetching: false
        }
      };
    default:
      return pages;
  }
};

export default combineReducers({
  posts
});
