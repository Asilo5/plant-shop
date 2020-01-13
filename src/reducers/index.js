import { combineReducers } from 'redux';
import { allPlants } from './allPlants';
import { errorMsg } from './hasError';
import { succeededMsg } from './succeededMsg';
import { favouritePlants } from './favouritePlants';

const rootReducer = combineReducers({
  allPlants,
  errorMsg,
  succeededMsg,
  favouritePlants
});

export default rootReducer;