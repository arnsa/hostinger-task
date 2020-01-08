import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TableHeaderCell from './TableHeaderCell';
import Pagination from './Pagination';
import styles from './Table.module.scss';

export const Table = ({
  items,
  error,
  isLoading,
  columns,
  rowKey,
  totalItems,
  limit,
  onChange,
  onCellClick,
}) => {
  const [page, setPage] = useState(1);
  const [sorter, setSorter] = useState({
    order: null,
    column: null,
  });
  const [clickedRowIndex, setClickedRowIndex] = useState(null);
  const handleSortChange = ({ order, column }) => {
    const sorter = { order, column };

    onChange({ sorter, page });
    setSorter(sorter);
    setClickedRowIndex(null);
  };
  const handlePageChange = (page) => {
    onChange({ sorter, page });
    setPage(page);
    setClickedRowIndex(null);
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

      {(!error && !isLoading) && (items.map((item, rowIndex) => (
        <div
          key={item[uniqueRowKey]}
          className={classnames(styles.tableRow, rowIndex === clickedRowIndex && styles.tableRowClicked)}
        >
          {columns.map((column) => (
            <button
              key={column.key}
              type="button"
              className={styles.tableCell}
              onClick={() => {
                setClickedRowIndex(rowIndex);
                onCellClick({ item, column });
              }}
            >
              {item[column.key] === null ? '-' : item[column.key]}
            </button>
          ))}
        </div>
      )))}
      <Pagination
        totalItems={totalItems}
        limit={limit}
        currentPage={page}
        onPageChange={(page) => handlePageChange(page)}
      />
    </div>
  );
};

Table.propTypes = {
  error: PropTypes.node,
  rowKey: PropTypes.string,
  isLoading: PropTypes.bool,
  limit: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func,
  onCellClick: PropTypes.func,
};

Table.defaultProps = {
  error: null,
  rowKey: null,
  isLoading: false,
  limit: 25,
  onChange: () => null,
  onCellClick: () => null,
};

export default Table;
