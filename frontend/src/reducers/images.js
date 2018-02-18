import { RECEIVE_IMAGES } from '../actions/images';

const images = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    default:
      return state;
  }
};

export default images;
