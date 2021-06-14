import { SET_SELECTED_CITY } from '../actions/city';

const INITIAL_STATE = {
  citySelected: [],
};

const citySelected = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_SELECTED_CITY:
    return ({ ...state,
      loading: false,
      citySelected: action.citySelected });
    default:
      return state
  }
};

export default citySelected;
