import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestWeatherAPI } from '../redux/actions';
import { withRouter } from 'react-router';

class ShowSearch extends Component {
  constructor(props) {
    super(props);
    this.requestWeather = this.requestWeather.bind(this)
  }

  async requestWeather() {
    document.querySelector('.svg1').classList.add('loadingON');
    const { getWeather, selectedCity, country } = this.props;
    await getWeather(selectedCity, country.iso2);
  }

  render() {
    const { country, selectedState, selectedCity, history } = this.props;
    const timer = 1900;
    return(
    <section className="showResult">
      <p className="searchResult">
        {`Country: ${country.iso2}`} <br/>
        {`State: ${selectedState}`} <br/>
        {`City: ${selectedCity}` }
      </p>
      { typeof(selectedCity) ===  "string" && selectedCity.length > 0
        ? (
            <button
              className="submitSearch"
              type="button"
              onClick={ () => {
                this.requestWeather();
                setTimeout(() => history.push('/Weather'), timer);
              }
            }
            >
              See the weather at this location
            </button>

          )
      : <span className="submitSearch">Choose Country, State and City before search</span>
      }
    </section>)
  }
}

const mapStateToProps = (state) => ({
  country: state.country.country,
  selectedCity: state.selectedCity.citySelected,
  selectedState: state.selectedState.stateSelected,
  weather: state.weather.weather,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: (selectedCity, country) => dispatch(requestWeatherAPI(selectedCity, country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShowSearch));
