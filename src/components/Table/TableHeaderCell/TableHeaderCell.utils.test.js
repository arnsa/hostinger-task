import { ORDERS } from './TableHeaderCell.const';
import { handleSort } from './TableHeaderCell.utils';

describe('handleSort', () => {
  it(`it should call onSort with ${ORDERS.ASC} if order is not set`, () => {
    const onSortMock = jest.fn();

    handleSort({ onSort: onSortMock });
    expect(onSortMock).toHaveBeenCalledWith(ORDERS.ASC);
  });

  it(`it should call onSort with ${ORDERS.DESC} if order is ${ORDERS.ASC}`, () => {
    const onSortMock = jest.fn();

    handleSort({ order: ORDERS.ASC, onSort: onSortMock });
    expect(onSortMock).toHaveBeenCalledWith(ORDERS.DESC);
  });

  it(`it should call onSort with null if order is ${ORDERS.DESC}`, () => {
    const onSortMock = jest.fn();

    handleSort({ order: ORDERS.DESC, onSort: onSortMock });
    expect(onSortMock).toHaveBeenCalledWith(null);
  });
});
