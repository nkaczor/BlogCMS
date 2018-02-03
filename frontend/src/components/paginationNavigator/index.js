import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pager } from 'react-bootstrap';

export default class PaginationNavigator extends Component {
  static defaultProps = {
    pageNumber: 1
  };

  render() {
    const { isPrev, isNext, pageNumber } = this.props;
    return (
      <Pager className="pagination-navigator">
        <Pager.Item
          previous
          href={`/page/${pageNumber - 1}`}
          disabled={!isPrev}
        >
          Previous
        </Pager.Item>{' '}
        <Pager.Item next href={`/page/${pageNumber + 1}`} disabled={!isNext}>
          Next
        </Pager.Item>
      </Pager>
    );
  }
}
