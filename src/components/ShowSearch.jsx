import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowSearch extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { country, selectedState, selectedCity } = this.props
    return(
    <section>
      <span className="searchResult">{ `Country: ${country.iso2}, State: ${selectedState}, City: ${selectedCity}` }</span>
      <button className="submitSearch" type="button">See climate on this location</button>
    </section>)
  }
}

const mapStateToProps = (state) => ({
  country: state.country.country,
  selectedCity: state.selectedCity.citySelected,
  selectedState: state.selectedState.stateSelected,
});

export default connect(mapStateToProps)(ShowSearch);