import { ORDERS } from './TableHeaderCell.const';

export function handleSort({ order, onSort }) {
  let nextOrder = null;

  if (!order) {
    nextOrder = ORDERS.ASC;
  } else if (order === ORDERS.ASC) {
    nextOrder = ORDERS.DESC;
  }

  onSort(nextOrder);
}

export function handleKeyPress({ event, order, onSort }) {
  if (event.key === 'Enter') {
    handleSort({ order, onSort });
  }
}
