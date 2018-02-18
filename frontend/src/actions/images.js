export const REQUEST_IMAGES = 'REQUEST_IMAGES';
function requestImages() {
  return {
    type: REQUEST_IMAGES
  };
}

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
function receiveImages(data) {
  return {
    type: RECEIVE_IMAGES,
    images: data
  };
}

export const fetchImages = () => {
  const url = 'http://localhost:8000/api/images';

  return function(dispatch) {
    dispatch(requestImages());
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(receiveImages(data));
      });
  };
};
