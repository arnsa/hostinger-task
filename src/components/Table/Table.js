import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TableHeaderCell from './TableHeaderCell';
import styles from './Table.module.scss';

export const Table = ({
  items,
  error,
  isLoading,
  columns,
  rowKey,
  onChange,
}) => {
  const [sorter, setSorter] = useState({
    order: null,
    column: null,
  });
  const handleSortChange = ({ order, column }) => {
    const sorter = { order, column };

    onChange({ sorter });
    setSorter(sorter);
  };
  const uniqueRowKey = rowKey || 'id';

  return (
    <div className={styles.root}>
      <div className={styles.tableHeader}>
        {columns.map((column) => (
          <TableHeaderCell
            key={column.key}
            sorter={column.sorter}
            order={sorter.column === column.key ? sorter.order : null}
            onSort={(order) => handleSortChange({
              order,
              column: column.key,
            })}
          >
            {column.title}
          </TableHeaderCell>
        ))}
      </div>

      {isLoading && (
        <div className={styles.placeholder}>
          <span>Loading...</span>
        </div>
      )}

      {(!isLoading && error) && (
        <div className={classnames(styles.placeholder, styles.error)}>
          <span>{error}</span>
        </div>
      )}

      {(!isLoading && !error && !items.length) && (
        <div className={styles.placeholder}>
          <span>
            There are no items
          </span>
        </div>
      )}

      {(!error && !isLoading) && (items.map((item) => (
        <div key={item[uniqueRowKey]} className={styles.tableRow}>
          {columns.map((column) => (
            <div key={column.key} className={styles.tableRowCell}>
              <div className={styles.tableCell}>
                {item[column.key] === null ? '-' : item[column.key]}
              </div>
            </div>
          ))}
        </div>
      )))}
    </div>
  );
};

Table.propTypes = {
  error: PropTypes.node,
  rowKey: PropTypes.string,
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func,
};

Table.defaultProps = {
  error: null,
  rowKey: null,
  isLoading: false,
  onChange: () => null,
};

export default Table;
