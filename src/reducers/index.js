import { combineReducers } from 'redux';
import { allPlants } from './allPlants';

const rootReducer = combineReducers({
  allPlants,
});

export default rootReducer;