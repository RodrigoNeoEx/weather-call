export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const requestWeather = (weather) => ({
  type: REQUEST_WEATHER,
  weather,
});
