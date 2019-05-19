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

  
});
