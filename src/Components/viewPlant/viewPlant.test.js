import React from 'react';
import { shallow } from 'enzyme';
import ViewPlant from './ViewPlant';

describe('ViewPlant', () => {
    it('should match snapshot', () => {
        let wrapper = shallow(<ViewPlant _id={1} 
                                         name='Aloe'
                                         price={15}
                                         image='image link'
                                         description='green queen'
                                         care='and sunshine' />)

       expect(wrapper).toMatchSnapshot();
    })
})