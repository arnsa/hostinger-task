import React from 'react';
import PropTypes from 'prop-types';
import styles from './CellData.module.scss';

export const CellData = ({ data, className }) => {
  if (data === null) {
    return null;
  }

  return (
    <div className={className}>
      <span className={styles.title}>
        {data.column.title}:&nbsp;
      </span>
      <span>{data.item[data.column.key]}</span>
    </div>
  );
};

CellData.propTypes = {
  data: PropTypes.shape({}),
  className: PropTypes.string,
};

CellData.defaultProps = {
  data: null,
  className: null,
};

export default CellData;
