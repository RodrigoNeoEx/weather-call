import { requestCountry } from './country';
import { requestStates, setSelectedState } from './states';
import { requestCity } from './city';
import {
  fetchCountryAPI,
  fetchStateByCountryAPI,
  fetchCityAPI,
} from '../../services/requestAPI';

export {
  requestCountry,
  requestStates,
  requestCity,
  setSelectedState,
};

export const requestCountryAPI = (input) => async (dispatch) => {
  dispatch(requestCountry());
  try {
    const response = await fetchCountryAPI(input);
    return dispatch(requestCountry(response));
  } catch (error) {
    return console.log(error);
  }
};

export const requestStateAPI = (input) => async (dispatch) => {
  dispatch(requestStates());
  try {
    const response = await fetchStateByCountryAPI(input);
    return dispatch(requestStates(response));
  } catch (error) {
    return console.log(error);
  }
};

export const requestCityAPI = (countryName, stateName) => async (dispatch) => {
  if(stateName) {
    dispatch(requestCity());
  try {
    const response = await fetchCityAPI(countryName, stateName);
    return dispatch(requestCity(response));
  } catch (error) {
    return console.log(error);
  }}
};