import { combineReducers } from 'redux';
import { RECEIVE_POSTS_PAGE, RECEIVE_POST } from '../actions/posts';

const posts = (state = {}, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_POSTS_PAGE:
      action.posts.forEach(post => {
        nextState[post.id] = post;
      });
      return nextState;
    case RECEIVE_POST:
      const { id, comments, ...rest } = action.post;
      nextState[id] = {
        id,
        comments: comments.map(({ id }) => id),
        ...rest
      };
      return nextState;
    default:
      return state;
  }
};

export default posts;
