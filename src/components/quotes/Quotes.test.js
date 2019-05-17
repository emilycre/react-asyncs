import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes Component', () => {
  it('Renders a Quotes', () => {
    const quotes = [
      {
        character: 'Fry',
        quote: '...',
        image: '/image'
      },
      {
        character: 'Fry',
        quote: '!',
        image: '/image'
      }
    ];
    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
