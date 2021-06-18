import { REQUEST_WEATHER } from '../actions/weather';

const INITIAL_STATE = {
  loading: true,
  weather: [],
}

const weather = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_WEATHER:
    return ({ ...state,
      loading: false,
      weather: action.weather});
    default:
      return state
  }
};

export default weather;
