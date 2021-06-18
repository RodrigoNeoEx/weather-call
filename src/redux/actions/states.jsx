export const REQUEST_STATES = 'REQUEST_STATES';
export const requestStates = (states) => ({
  type: REQUEST_STATES,
  states,
});

export const SET_SELECTED_STATES = 'SET_SELECTED_STATES';
export const setSelectedState = (stateSelected) => ({
  type: SET_SELECTED_STATES,
  stateSelected,
});
