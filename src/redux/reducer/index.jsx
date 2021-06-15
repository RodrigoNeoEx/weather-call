import { combineReducers } from 'redux';
import country from './country';
import states from './states';
import city from './city';
import selectedState from './selectedState';
import selectedCity from './selectedCity';
import weather from './weather';

export default combineReducers({
  country,
  states,
  city,
  selectedState,
  selectedCity,
  weather,
});
