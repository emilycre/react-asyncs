import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('Paging Component', () => {
  it('Renders Paging', () => {
    const wrapper = shallow(
      <Paging currentPage={1} totalPages={10} nextPage={jest.fn()}>
        <h1>Hello.</h1>
      </Paging>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Increments page on Next Page button click', () => {
    const next = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={2} totalPages={10} nextPage={next}>
        <h1>Hello, again.</h1>
      </Paging>
    );
    wrapper.find('button').at(1).simulate('click');
    expect(next).toHaveBeenCalledWith(3);
  });

  it('Decrements page on Previous Button click', () => {
    const next = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={2} totalPages={10} nextPage={next}>
        <h1>Hello.</h1>
      </Paging>
    );
    wrapper.find('button').at(0).simulate('click');
    expect(next).toHaveBeenCalledWith(1);
  });

  it('Does not display the previous button when on page 01', () => {
    const next = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={1} totalPages={10} nextPage={next}>
        <h1>Hello...</h1>
      </Paging>
    );
    const buttons = wrapper.find('button');
    expect(buttons).toHaveLength(1);
    expect(buttons.at(0).text()).toEqual('Next Page');
  });

  it('Does not display the next button when on last page', () => {
    const next = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={10} totalPages={10} nextPage={next}>
        <h1>Hello.</h1>
      </Paging>
    );
    const buttons = wrapper.find('button');
    expect(buttons).toHaveLength(1);
    expect(buttons.at(0).text()).toEqual('Previous Page');
  });
});
