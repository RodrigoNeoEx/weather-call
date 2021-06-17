import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestWeatherAPI } from '../redux/actions';

class ShowSearch extends Component {
  constructor(props) {
    super(props);
    this.requestWeather = this.requestWeather.bind(this)
  }

  requestWeather() {
    const { getWeather, selectedCity, country } = this.props;
    getWeather(selectedCity, country);
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
      <button
        className="submitSearch"
        type="button"
        onClick={this.requestWeather}
      >
        See the weather at this location
      </button>
    </section>)
  }
}

const mapStateToProps = (state) => ({
  country: state.country.country,
  selectedCity: state.selectedCity.citySelected,
  selectedState: state.selectedState.stateSelected,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: (selectedCity, country) => dispatch(requestWeatherAPI(selectedCity, country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowSearch);