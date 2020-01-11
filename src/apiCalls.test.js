 import { getPlants } from './apiCalls';

 describe('Api Calls', () => {

   describe('getPlants', () => {

     let mockResponse = {
        "success": true,
        "plants": [
            {
                "_id": "5e16b1c988553086edcddc52",
                "name": "Cannabis",
                "description": "Stanky plant",
                "care": "Lots of Love",
                "price": 50,
                "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
                "__v": 0
            }
        ]
     }

     beforeEach(() => {
         window.fetch = jest.fn().mockImplementation(() => {
             return Promise.resolve({
               ok: true,
               json: () => Promise.resolve(mockResponse)
             })
         });
     })

     it('should be passed the correct url', () => {
         getPlants();

         expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001')
     })

     it('should return an array of plants', () => {
         expect(getPlants()).resolves.toEqual(mockResponse)
     })

     it.skip('should return an error if response is not ok', () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: false
            })
        });
        
        expect(getPlants()).rejects.toEqual(Error('Error fetching plants'))
     })

   })

 })