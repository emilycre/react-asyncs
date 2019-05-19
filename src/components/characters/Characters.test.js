import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters Component', () => {
  it('Renders Characters', () => {
    const characters = [
      {
        name: 'Morty',
        status: 'Alive',
        species: 'Human',
        image: '/image'
      },
      {
        name: 'Summer',
        status: 'Alive',
        species: 'Human',
        image: '/image'
      }
    ];
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
