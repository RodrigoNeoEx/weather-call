import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestWeatherAPI } from '../redux/actions';
import { Link } from 'react-router-dom';

class ShowSearch extends Component {
  constructor(props) {
    super(props);
    this.requestWeather = this.requestWeather.bind(this)
  }

  async requestWeather() {
    const { getWeather, selectedCity, country } = this.props;
    await getWeather(selectedCity, country.iso2);

  }

  render() {
    const { country, selectedState, selectedCity } = this.props
    return(
    <section className="showResult">
      <span className="searchResult">
        {`Country: ${country.iso2}`} <br/>
        {`State: ${selectedState}`} <br/>
        {`City: ${selectedCity}` }
      </span>
      { typeof(selectedCity) ===  "string" && selectedCity.length > 0
        ? (
          <Link to="/Weather">
            <button
              className="submitSearch"
              type="button"
              onClick={this.requestWeather}
            >
              See the weather at this location
            </button>
          </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowSearch);