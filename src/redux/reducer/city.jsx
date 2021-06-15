import { REQUEST_CITY } from '../actions/city';

const INITIAL_STATE = {
  loading: true,
  city: [],
}

const city = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CITY:
    return ({ ...state,
      loading: false,
      city: action.city});
    default:
      return state
  }
};

export default city;
