import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowSearch extends Component {
  // constructor(props) {
  //   super(props);
  // }
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
        // onClick={}
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

export default connect(mapStateToProps)(ShowSearch);