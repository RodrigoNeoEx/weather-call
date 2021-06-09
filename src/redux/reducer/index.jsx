import { combineReducers } from 'redux';
import country from './country';
import states from './states';
import city from './city';

export default combineReducers({
  country,
  states,
  city,
});
