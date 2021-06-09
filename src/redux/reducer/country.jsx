import { REQUEST_COUNTRY } from '../actions/country';

const INITIAL_STATE = {
  loading: true,
  country: [],
}

const country = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COUNTRY:
    return ({ ...state,
      loading:false,
      country: action.country});
    default:
      return state
  }
};

export default country;
