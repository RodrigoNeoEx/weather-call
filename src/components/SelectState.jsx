import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedState, requestCityAPI } from '../redux/actions';

class SelectState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const { selectedState } = this.state
    const { getSelectedState, getCitys, country } = this.props
    this.setState({selectedState: event.target.value});
    await getSelectedState(selectedState);
    await getCitys(country.iso2, selectedState);
  }

  render() {
    const { states } = this.props;
    const { selectedState } = this.state
    return(
      <select value={ selectedState } onChange={this.handleChange}>
        { states ? states.map((stateName,) => {
          return (
          <option
            value={stateName.iso2}
            key={ stateName.name }
          >
            { `${stateName.name} - ${stateName.iso2}` }
          </option>);
        })
        : <option>Loading</option> }
      </select>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCitys: (input1, input2) => dispatch(requestCityAPI(input1, input2)),
  getSelectedState: (input) => dispatch(setSelectedState(input)),
});

const mapStateToProps = (state) => ({
  states: state.states.states,
  country: state.country.country,
  selectedState: state.selectedState.selectedState,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectState);
