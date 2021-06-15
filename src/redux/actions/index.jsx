import { requestCountry } from './country';
import { requestStates, setSelectedState } from './states';
import { requestCity, setSelectedCity } from './city';
import { requestWeather } from './weather';
import {
  fetchCountryAPI,
  fetchStateByCountryAPI,
  fetchCityAPI,
  fetchWeatherAPI,
} from '../../services/requestAPI';

export {
  requestCountry,
  requestStates,
  requestCity,
  setSelectedState,
  setSelectedCity,
  requestWeather,
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

export const requestStateAPI = (countryIso) => async (dispatch) => {
  dispatch(requestStates());
  try {
    const response = await fetchStateByCountryAPI(countryIso);
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

export const requestWeatherAPI = (selectedCity) => async (dispatch) => {
    dispatch(requestWeather());
  try {
    const response = await fetchWeatherAPI(selectedCity);
    return dispatch(requestWeather(response));
  } catch (error) {
    return console.log(error);
  }
};
