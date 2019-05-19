import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character Component', () => {
  it('Renders a Character', () => {
    const character = {
      name: 'Morty',
      status: 'Alive',
      species: 'Human',
      image: '/image'
    };
    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
