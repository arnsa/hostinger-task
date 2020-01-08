import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowUp } from '../../../assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../../assets/arrow-down.svg';
import { ORDERS } from './TableHeaderCell.const';
import { handleSort, handleKeyPress } from './TableHeaderCell.utils';
import styles from './TableHeaderCell.module.scss';

export const TableHeaderCell = ({ order, children, onSort }) => (
  <div
    role="button"
    tabIndex="-1"
    className={styles.root}
    onClick={() => handleSort({ order, onSort })}
    onKeyPress={(event) => handleKeyPress({ event, order, onSort })}
  >
    {children}
    <div className={styles.sortIcons}>
      {order === ORDERS.ASC && <ArrowUp className={styles.arrow} />}
      {order === ORDERS.DESC && <ArrowDown className={styles.arrow} />}
    </div>
  </div>
);

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  order: PropTypes.oneOf([...Object.values(ORDERS)]),
  onSort: PropTypes.func.isRequired,
};

TableHeaderCell.defaultProps = {
  order: null,
  children: null,
};

export default TableHeaderCell;
