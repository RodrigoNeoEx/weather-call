import { SET_SELECTED_STATES } from '../actions/states';

const INITIAL_STATE = {
  stateSelected: [],
};

const stateSelected = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_SELECTED_STATES:
    return ({ ...state,
      loading: false,
      stateSelected: action.stateSelected });
    default:
      return state
  }
};

export default stateSelected;
