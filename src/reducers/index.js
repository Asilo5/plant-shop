import { combineReducers } from 'redux';
import { allPlants } from './allPlants';
import { errorMsg } from './hasError';
import { succeededMsg } from './succeededMsg';

const rootReducer = combineReducers({
  allPlants,
  errorMsg,
  succeededMsg
});

export default rootReducer;