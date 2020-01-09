import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent as ArrowUp } from '../../../assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../../assets/arrow-down.svg';
import { ORDERS } from './TableHeaderCell.const';
import TableHeaderCell from './TableHeaderCell';

function getWrapper(props) {
  return shallow(
    <TableHeaderCell
      onSort={() => null}
      {...props}
    />
  );
}

describe('<TableHeaderCell />', () => {
  it(`renders <ArrowUp /> when order is set to ${ORDERS.ASC}`, () => {
    const wrapper = getWrapper({ order: ORDERS.ASC });

    expect(wrapper.find(ArrowUp).length).toEqual(1);
  });

  it(`renders <ArrowDown /> when order is set to ${ORDERS.DESC}`, () => {
    const wrapper = getWrapper({ order: ORDERS.DESC });

    expect(wrapper.find(ArrowDown).length).toEqual(1);
  });
});
