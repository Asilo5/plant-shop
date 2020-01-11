import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar component', () => {
  
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<NavBar />)
  })

  it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  })

})