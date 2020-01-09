import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

function getWrapper(props) {
  return shallow(
    <Pagination
      limit={25}
      totalItems={100}
      currentPage={1}
      onPageChange={() => null}
      {...props}
    />
  );
}

describe('<Pagination />', () => {
  it('does not render if there are no pages', () => {
    const wrapper = getWrapper({ totalItems: 0 });

    expect(wrapper.html()).toEqual(null);
  });

  it('does not render if limit is -1', () => {
    const wrapper = getWrapper({ limit: -1 });

    expect(wrapper.html()).toEqual(null);
  });

  it('renders pagination if not showing all records', () => {
    const wrapper = getWrapper({});

    expect(wrapper.find('.pages').length).toEqual(1);
  });
});
