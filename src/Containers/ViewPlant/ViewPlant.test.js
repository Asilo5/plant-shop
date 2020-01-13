import React from 'react';
import { shallow } from 'enzyme';
import {ViewPlant, mapStateToProps, mapDispatchToProps} from './ViewPlant';
import { addFavouritePlant, deleteFavouritePlant } from '../../actions';

describe('ViewPlant Container', () => {

    describe('ViewPlant', () => {
        const favPlants= [1,2,3];

        it('should match snapshot', () => {
            let wrapper = shallow(<ViewPlant _id={1} 
                                             name='Aloe'
                                             price={15}
                                             image='image link'
                                             description='green queen'
                                             care='and sunshine' 
                                             favouritePlants={favPlants} 
                                             addFavouritePlant={jest.fn()} 
                                             deleteFavouritePlant={jest.fn()} />) 
    
           expect(wrapper).toMatchSnapshot();
        })
    })

    describe('mapStateToProps', () => {
        it('should return an object with current state used in component', () => {
            const mockState = {
                favouritePlants: [1,2,4]
            };

            const expected = {
                favouritePlants: [1,2,4]
            };

            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected);
        })
    })

    describe('mapDispatchToProps', () => {

        const mockAddFavouritePlant = {
            name: "Aloe Queen",
            description: "Healing plant",
            care: "Lots of Love",
            price: 20,
            image: "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
            
        };
        const mockDeleteFavouritePlant = '1';

        const mockDispatch = jest.fn();

        it('should dispatch addFavouritePlant', () => {
            const actionToDispatch = addFavouritePlant(mockAddFavouritePlant);
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.addFavouritePlant(mockAddFavouritePlant);
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })

        it('should dispatch deleteFavouritePlant', () => {
            const actionToDispatch = deleteFavouritePlant(mockDeleteFavouritePlant);
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.deleteFavouritePlant(mockDeleteFavouritePlant);
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })

})
