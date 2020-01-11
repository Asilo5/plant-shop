import { errorMsg } from './hasError';

describe('hasError reducer', () => {

    it('should return the initial state', () => {
      const expected = '';
      const result = errorMsg(undefined, {});

      expect(result).toEqual(expected);
    })

    it('should return correct state when HAS_ERROR is passed in the action object', () => {
      const initialState = '';
      const action = {
          type: 'HAS_ERROR',
          error: 'Error found' 
      };

      const result = errorMsg(initialState, action);
      const expected = 'Error found' ;

      expect(result).toEqual(expected);
    })
})