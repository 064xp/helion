import { combineReducers } from 'redux';
import floaterReducer from './floaterReducer';

export default combineReducers({
  floater: floaterReducer
});
