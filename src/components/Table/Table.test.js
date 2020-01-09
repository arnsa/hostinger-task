import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

function getWrapper(props) {
  return shallow(
    <Table
      items={[]}
      columns={[]}
      totalItems={0}
      {...props}
    />
  );
}

describe('<Table />', () => {
  it('renders loading text when isLoading prop is set to true', () => {
    const wrapper = getWrapper({ isLoading: true });

    expect(wrapper.find('.placeholder').text()).toEqual('Loading...');
  });

  it('renders error', () => {
    const wrapper = getWrapper({ error: 'error' });

    expect(wrapper.find('.placeholder').text()).toEqual('error');
  });

  it('renders message if there are no items', () => {
    const wrapper = getWrapper();

    expect(wrapper.find('.placeholder').text()).toEqual('There are no items');
  });

  it('renders columns', () => {
    const wrapper = getWrapper({
      columns: [
        { key: 'a', title: 'a' },
        { key: 'b', title: 'b' },
        { key: 'c', title: 'c' },
      ],
    });

    expect(wrapper.find('.tableHeader').children().length).toEqual(3);
  });
});
