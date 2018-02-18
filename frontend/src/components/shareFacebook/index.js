/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import PropTypes from 'prop-types';

export default function ShareFacebook(props) {
  return (
    <div
      className="fb-share-button"
      data-href={props.url}
      data-layout="button_count"
      data-size="large"
      data-mobile-iframe="true"
    >
      <a
        target="_blank"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
        className="fb-xfbml-parse-ignore"
      >
        Share
      </a>
    </div>
  );
}

ShareFacebook.propTypes = {
  url: PropTypes.string.isRequired
};
