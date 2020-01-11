import * as actions from './index';

describe('Actions', () => {

  describe('addPlants',  () => {

    it('should return an object containing type: "ADD_PLANTS" and the plants', () => {

        const mockPlants =  [
               {
                   "_id": "5e16b1c988553086edcddc52",
                   "name": "Cannabis",
                   "description": "Stanky plant",
                   "care": "Lots of Love",
                   "price": 50,
                   "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
                   "__v": 0
               }
           ];
    
           const expectedAction = {
               type: 'ADD_PLANTS',
               setPlants: [
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
           };
    
           const result = actions.addPlants(mockPlants);
           expect(result).toEqual(expectedAction);
    })
    

  })

  describe('hasError',  () => {

    it('should return an object containing type: "HAS_ERROR" and the error', () => {
        const mockError = 'Error found';
    
        const expectedAction = {
            type: 'HAS_ERROR',
            error: 'Error found'
        };
    
        const result = actions.hasError(mockError);
        expect(result).toEqual(expectedAction);

    })
     

  })

})