import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Page from './Page/Page';
import pageStyles from './Page/Page.module.scss';
import { getPages } from './Pagination.utils';
import styles from './Pagination.module.scss';

export const Pagination = ({
  currentPage,
  totalItems,
  limit,
  initialLimit,
  onPageChange,
  onLimitChange,
}) => {
  const [showingAllRecords, setShowingAllRecords] = useState(false);
  const pages = getPages({
    currentPage,
    totalPages: Math.ceil(totalItems / limit),
  });
  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextPageClick = () => {
    const pages = Math.ceil(totalItems / limit);

    if (currentPage < pages) {
      onPageChange(currentPage + 1);
    }
  };
  const handleLimitChange = () => {
    if (showingAllRecords) {
      onLimitChange(initialLimit);
    } else {
      onLimitChange(totalItems);
    }
    setShowingAllRecords((showingAllRecords) => !showingAllRecords);
  };

  if (!pages.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      {!showingAllRecords && (
        <div className={styles.pages}>
          <button
            type="button"
            className={pageStyles.root}
            onClick={handlePreviousPageClick}
          >
            &lt; Previous
          </button>
          {pages.map((p) => (
            <Page
              key={p}
              page={p}
              currentPage={currentPage}
              onClick={onPageChange}
            />
          ))}
          <button
            type="button"
            className={pageStyles.root}
            onClick={handleNextPageClick}
          >
            Next &gt;
          </button>
        </div>
      )}
      <button
        type="button"
        className={classnames(pageStyles.root, pageStyles.showAll)}
        onClick={handleLimitChange}
      >
        {`${showingAllRecords ? 'Hide' : 'Show'} all records`}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  limit: PropTypes.number.isRequired,
  initialLimit: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onLimitChange: PropTypes.func,
};

Pagination.defaultProps = {
  currentPage: null,
  onLimitChange: () => null,
};

export default Pagination;
