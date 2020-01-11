import { allPlants } from './allPlants';

describe('allPlants reducer', () => {

    it('should return the initial state', () => {
      const expected = [];
      const result = allPlants(undefined, {});

      expect(result).toEqual(expected);
    })

    it('should return correct state when ADD_PLANTS is passed in the action object', () => {
      const initialState = [];
      const action = {
          type: 'ADD_PLANTS',
          setPlants: [
            {
                "_id": "5e16b29d88553086edcddc53",
                "name": "Aloe Queen",
                "description": "Healing plant",
                "care": "Lots of Love",
                "price": 20,
                "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
                "__v": 0
            }
          ]
      };

      const result = allPlants(initialState, action);
      const expected = [
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

      expect(result).toEqual(expected);
    })
})