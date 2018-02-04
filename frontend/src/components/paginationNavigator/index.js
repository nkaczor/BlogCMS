import React from 'react';
import PropTypes from 'prop-types';
import { Pager } from 'react-bootstrap';

export default function PaginationNavigator(props) {
  return (
    <Pager className="pagination-navigator">
      <Pager.Item
        previous
        href={`/page/${props.pageNumber - 1}`}
        disabled={!props.isPrev}
      >
        Previous
      </Pager.Item>{' '}
      <Pager.Item
        next
        href={`/page/${props.pageNumber + 1}`}
        disabled={!props.isNext}
      >
        Next
      </Pager.Item>
    </Pager>
  );
}

PaginationNavigator.propTypes = {
  pageNumber: PropTypes.number,
  isNext: PropTypes.bool,
  isPrev: PropTypes.bool
};

PaginationNavigator.defaultProps = {
  pageNumber: 1,
  isNext: false,
  isPrev: false
};
