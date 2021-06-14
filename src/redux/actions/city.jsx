export const REQUEST_CITY = 'REQUEST_CITY';
export const requestCity = (city) => ({
  type: REQUEST_CITY,
  city,
});

export const SET_SELECTED_CITY = 'SET_SELECTED_CITY';
export const setSelectedCity = (citySelected) => ({
  type: SET_SELECTED_CITY,
  citySelected,
})
