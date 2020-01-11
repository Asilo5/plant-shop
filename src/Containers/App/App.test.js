import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { addPlants } from '../../actions';
import  { getPlants } from '../../apiCalls';

jest.mock('../../apiCalls');

describe('App container', () => {

  describe('App', () => {

    let wrapper;
    let mockPlants = [
      {
        "_id": "5e16b29d88553086edcddc53",
        "name": "Aloe Queen",
        "description": "Healing plant",
        "care": "Lots of Love",
        "price": 20,
        "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
        "__v": 0
      }
    ];

     beforeEach(() => {
      getPlants.mockImplementation(() => {
        return Promise.resolve(mockPlants)
      });

       wrapper = shallow(<App addPlants={jest.fn()} /> )
     })

     it('should match snapshot with all information passing in correctly', () => {
       expect(wrapper).toMatchSnapshot();
     })

     it('should call getMovies after component is mounted', () => {
      expect(getPlants).toHaveBeenCalled();
    })

  })

  describe('mapDispatchToProps', () => {
    let mockPlants = [
      {
        "_id": "5e16b29d88553086edcddc53",
        "name": "Aloe Queen",
        "description": "Healing plant",
        "care": "Lots of Love",
        "price": 20,
        "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
        "__v": 0
      }
    ];

    const mockDispatch = jest.fn();

    it('should dispatch addPlants', () => {
      const actionToDispatch = addPlants(mockPlants);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addPlants(mockPlants);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
   
})


