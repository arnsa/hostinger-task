import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page/Page';
import pageStyles from './Page/Page.module.scss';
import { getPages } from './Pagination.utils';
import { PAGE_LIMIT } from './Pagination.const';
import styles from './Pagination.module.scss';

export const Pagination = ({
  currentPage,
  totalItems,
  limit,
  onPageChange,
}) => {
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

  if (!pages.length) {
    return null;
  }

  return (
    <div className={styles.root}>
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
  );
};

Pagination.propTypes = {
  limit: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  limit: PAGE_LIMIT,
};

export default Pagination;
