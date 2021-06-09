import { requestCountry } from './country';
import { requestStates } from './states';
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
};

export const requestCountryAPI = () => async (dispatch) => {
  dispatch(requestCountry());
  try {
    const response = await fetchCountryAPI();
    return dispatch(requestCountry(response.name));
  } catch (error) {
    return console.log(error);
  }
};

export const requestStateAPI = () => async (dispatch) => {
  dispatch(requestStates());
  try {
    const response = await fetchStateByCountryAPI();
    return dispatch(requestStates(response.name));
  } catch (error) {
    return console.log(error);
  }
};

export const requestCityAPI = () => async (dispatch) => {
  dispatch(requestCity());
  try {
    const response = await fetchCityAPI();
    return dispatch(requestCity(response.name));
  } catch (error) {
    return console.log(error);
  }
};