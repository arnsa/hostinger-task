import React from 'react';
import { shallow } from 'enzyme';
import { PAGES } from '../Pagination.const';
import Page from './Page';

function getWrapper(props) {
  return shallow(
    <Page
      page={1}
      {...props}
    />
  );
}

describe('<Page />', () => {
  it(`renders three dots if page is set to ${PAGES.LEFT}`, () => {
    const wrapper = getWrapper({ page: PAGES.LEFT });

    expect(wrapper.find('.page').text()).toEqual('...');
  });

  it(`renders three dots if page is set to ${PAGES.RIGHT}`, () => {
    const wrapper = getWrapper({ page: PAGES.RIGHT });

    expect(wrapper.find('.page').text()).toEqual('...');
  });

  it('renders page number', () => {
    const wrapper = getWrapper({ page: 5 });

    expect(wrapper.find('.root').text()).toEqual('5');
    expect(wrapper.find('.active').length).toEqual(0);
  });

  it('renders page number with correct class name if page is active', () => {
    const wrapper = getWrapper({ page: 5, currentPage: 5 });

    expect(wrapper.find('.active').length).toEqual(1);
  });
});
