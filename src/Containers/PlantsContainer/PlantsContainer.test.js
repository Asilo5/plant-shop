import React from 'react';
import { shallow } from 'enzyme';
import {PlantsContainer, mapStateToProps } from './PlantsContainer';

describe('PlantsContainer container', () => {

    describe('PlantsContainer', () => {
        it('should match snapshot', () => {
            let mockAllPlants = [
                {
                    "_id": "5e16b29d88553086edcddc53",
                    "name": "Aloe Queen",
                    "description": "Healing plant",
                    "care": "Lots of Love",
                    "price": 20,
                    "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
                    "__v": 0
                },
            ];
    
            let wrapper = shallow(<PlantsContainer allPlants={mockAllPlants} />);
    
            expect(wrapper).toMatchSnapshot();
        })
    })

    describe('mapStateToProps', () => {
        it('should return all state with their properties', () => {
            const mockState = {
                "allPlants": [
                    {
                          "__v": 0,
                          "_id": "5e16b29d88553086edcddc53",
                          "care": "Lots of Love",
                          "description": "Healing plant",
                          "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
                          "name": "Aloe Queen",
                          "price": 20,
                     },
                      ]
            }

            const expected = {
                "allPlants": [
                    {
                          "__v": 0,
                          "_id": "5e16b29d88553086edcddc53",
                          "care": "Lots of Love",
                          "description": "Healing plant",
                          "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
                          "name": "Aloe Queen",
                          "price": 20,
                     },
                      ]
            }

            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected);
        })
    })
})
