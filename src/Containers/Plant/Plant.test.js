import React from 'react';
import { shallow } from 'enzyme';
import {Plant} from './Plant';

describe('Plant component', () => {
    it('should match snapshot', () => {
        let wrapper = shallow(<Plant _id={1} 
                                     name='Aloe'
                                     price={15} 
                                     image='image link' />)
        expect(wrapper).toMatchSnapshot();
    })
})