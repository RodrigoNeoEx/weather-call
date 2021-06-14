import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowSearch extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <div>Hello</div>
  }
}

const mapStateToProps = (state) => ({
  country: state.country.country,
  // selectedCity: state.selectedCity.citySelected,
  selectedState: state.selectedState.stateSelected,
});

export default connect(mapStateToProps)(ShowSearch);