 import { getPlants, postPlant, deletePlantFetch } from './apiCalls';

 describe('Api Calls', () => {

   describe('getPlants', () => {

     let mockResponse = {
        "success": true,
        "plants": [
            {
                "_id": "5e16b1c988553086edcddc52",
                "name": "Roses",
                "description": "Colourful beautiful flowers",
                "care": "Lots of Love",
                "price": 50,
                "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
                "__v": 0
            }
        ]
     };

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

     it('should return an error if response is not ok', () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: false
            })
        });
        
        expect(getPlants()).rejects.toEqual(Error('Error fetching plants'))
     })

   });

   describe('postPlant', () => {

    const mockPlant = {
       name: "Roses",
       description: "Colourful beautiful flowers",
       care: "Lots of Love",
       price: 50,
       image: "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg",
    }; 

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockPlant)
          })
      });
    });

    it('should fetch the correct arguments', () => {
      const expected = ['http://localhost:3001/addPlant', {
          method: 'POST',
          body: JSON.stringify(mockPlant),
          headers: {
            'Content-Type': 'application/json'
          }
        }];

      postPlant(mockPlant);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
     });

     it('should return plants data (Happy Path)', () => {
      postPlant(mockPlant).then(results => expect(results).toEqual(mockPlant))
    });

    it('should return an error if response is not ok (Sad Path)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
            ok: false
          });
        })
        expect(postPlant(mockPlant)).rejects.toEqual(Error('Error posting plants'))
    });

   });

   describe('deletePlantFetch', () => {
      
        let PlantId = "1";
        let mockResponse = {
            "_id": "1",
            "name": "Roses",
            "description": "Colourful beautiful flowers",
            "care": "Lots of Love",
            "price": 50,
            "image": "https://target.scene7.com/is/image/Target/GUEST_be7e6313-15ac-4e1c-94b8-8af5595d6cb6?wid=488&hei=488&fmt=pjpeg"
        }

        
        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                })
            })
          });

          it('should fetch correct arguments', () => {
              const expected = [`http://localhost:3001/deletePlant/${PlantId}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              }];

              deletePlantFetch(PlantId);
              expect(window.fetch).toHaveBeenCalledWith(...expected);
          });

          it('should return movies data (Happy Path)', () => {
            deletePlantFetch(PlantId).then(results => expect(results).toEqual(PlantId))
          });
    
          it('should return an error if response is not ok (Sad Path)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                  ok: false
              });
            })
            expect(deletePlantFetch(PlantId)).rejects.toEqual(Error('Error deleting plants'))

          });
    
  });

 })