import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PAGES } from '../Pagination.const';
import styles from './Page.module.scss';

export const Page = ({ page, currentPage, onClick }) => {
  if (page === PAGES.LEFT || page === PAGES.RIGHT) {
    return (
      <span className={classnames(styles.page, styles.disabled)}>
        ...
      </span>
    );
  }

  return (
    <button
      type="button"
      className={classnames(
        styles.root,
        (page === currentPage) && styles.active
      )}
      onClick={() => {
        if (page !== currentPage) {
          onClick(page);
        }
      }}
    >
      {page}
    </button>
  );
};

Page.propTypes = {
  page: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  currentPage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(Page);
