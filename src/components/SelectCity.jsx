import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCityAPI, setSelectedCity } from '../redux/actions';

class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      city: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {country, selectedState, getCitys} = this.props;
    getCitys(country.iso2, selectedState);
  }

  componentDidUpdate() {
    const { selectedCity } = this.state;
    const { getSelectedCity } = this.props;
    getSelectedCity(selectedCity);
  }

  handleChange(event) {
    this.setState({selectedCity: event.target.value});
  }

  async requestCitys() {
    const { country, getCitys, selectedState, city } = this.props;
    await getCitys(country, selectedState);
    city.map((cityName, index) => {
      return (
      <option
        value={ cityName.name }
        key={ index }
      >
        { cityName.name }
      </option>);
    })
  };

  render() {
    const { city } = this.props;
    const { selectedCity } = this.state;
    return(
      <>
      <select value={ selectedCity } onChange={this.handleChange}>
        { city
          ? city.map((cityName, index) => {
            return (
            <option
              value={ cityName.name }
              key={ index }
            >
              { cityName.name }
            </option>);
            })
          : <option>loading...</option>
        }
      </select>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  city: state.city.city,
  selectedCity: state.selectedCity.citySelected,
  selectedState: state.selectedState.stateSelected,
  country: state.country.country,
});

const mapDispatchToProps = (dispatch) => ({
  getCitys: (countryIso, stateIso) => dispatch(requestCityAPI(countryIso, stateIso)),
  getSelectedCity: (input) => dispatch(setSelectedCity(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);
