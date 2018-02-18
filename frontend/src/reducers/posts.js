import { RECEIVE_POSTS_PAGE, RECEIVE_POST } from '../actions/posts';
import { ADD_COMMENT_SUCCESS } from '../actions/comments';

const posts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS_PAGE:
      const nextState = { ...state };
      action.posts.forEach(post => {
        nextState[post.id] = post;
      });
      return nextState;
    case RECEIVE_POST:
      const { id, comments, ...rest } = action.post;
      return {
        ...state,
        [id]: {
          id,
          comments: comments.map(comment => comment.id),
          ...rest
        }
      };
    case ADD_COMMENT_SUCCESS:
      const post = state[action.comment.post];
      return {
        ...state,
        [action.comment.post]: {
          ...post,
          comments: [...post.comments, action.comment.id]
        }
      };
    default:
      return state;
  }
};

export default posts;
