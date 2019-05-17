import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote Component', () => {
  it('Renders a Quote', () => {
    const quote = {
      character: 'Fry',
      quote: '...',
      image: '/image'
    };
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
