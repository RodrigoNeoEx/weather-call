import { REQUEST_STATES } from '../actions/states';

const INITIAL_STATE = {
  loading: true,
  states: [],
}

const states = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_STATES:
    return ({ ...state,
      loading:false,
      states: action.country});
    default:
      return state
  }
};

export default states;
