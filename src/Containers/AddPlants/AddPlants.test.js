import React from 'react';
import { shallow } from 'enzyme';
import { newPlant, hasError, successMsg } from '../../actions';
import { postPlant } from '../../apiCalls';
import { AddPlants, mapStateToProps, mapDispatchToProps } from './AddPlants';

jest.mock('../../apiCalls');

describe('AddPlants container', () => {
  
    describe('AddPlants', () => {
      let wrapper;
      let mockSucceededMsg = 'Posted Plant';
      let mockErrorMsg = 'Error';
      let mockPlant = {
            name: 'Aloe',
            description: 'Green Queen',
            care: 'Loads of love',
            price: 12,
            image: 'image link'
       };

      beforeEach(() => {
          wrapper = shallow(<AddPlants succeededMsg={mockSucceededMsg}
                                       errorMsg={mockErrorMsg} 
                                       newPlant={jest.fn()} 
                                       hasError={jest.fn()} 
                                       successMsg={jest.fn()} />)

         postPlant.mockImplementation(() => {
             return Promise.resolve(mockPlant);
         });
      });

      it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
      })

      it('should call handleChange if input changes on name input', () => {
          wrapper.instance().handleChange = jest.fn();
          const mockEvent = {
              target: {
                name: 'name',
                value: 'Aloe'
              }
          };

          wrapper.find('input').at(0).simulate('change', mockEvent);
          expect(wrapper.instance().handleChange).toHaveBeenCalled();
      })

      it('should call handleChange if input changes on description input', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
              name: 'description',
              value: 'Green Queen'
            }
        };

        wrapper.find('input').at(1).simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
      })

      it('should call handleChange if input changes on care input', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
              name: 'care',
              value: 'Lots of love'
            }
        };

        wrapper.find('input').at(2).simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
      })

      it('should call handleChange if input changes on image input', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
              name: 'image',
              value: 'image link'
            }
        };

        wrapper.find('input').at(3).simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
      })

      it('should call handleChange if input changes on price input', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
              name: 'price',
              value: 10
            }
        };

        wrapper.find('input').at(4).simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
      })


      it('should call postPlant when handleSubmit is called', async () => {
          await wrapper.instance().handleSubmit({ preventDefault : jest.fn() });
          expect(postPlant).toHaveBeenCalled(); 

      })

      it('should call on clearInputs when handleSubmit is called', () => {
        wrapper.instance().clearInputs = jest.fn();
        wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
        expect(wrapper.instance().clearInputs).toHaveBeenCalled();
      })

      it('should reset state when clearInput is called', () => {
         const expected = {
            name: '',
            description: '',
            care: '',
            price: 0,
            image: ''
         };

         const filledState = {
            name: 'Aloe',
            description: 'Green queen',
            care: 'loads of love',
            price: 10,
            image: 'image link'
         };

        wrapper.instance().setState(filledState);
        wrapper.instance().clearInputs();
        expect(wrapper.state()).toEqual(expected);
      })

    });

    describe('mapStateToProps', () => {
        
    });

    describe('mapDispatchToProps', () => {
        
    });
})