import { requestCountry } from './country';
import { requestState } from './state';
import { requestCity } from './city';
import {
  fetchCountryAPI,
  fetchStateByCountryAPI,
  fetchCityAPI,
} from '../../services/requestAPI';

export {
  requestCountry,
  requestState,
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
  dispatch(requestState());
  try {
    const response = await fetchStateByCountryAPI();
    return dispatch(requestState(response.name));
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