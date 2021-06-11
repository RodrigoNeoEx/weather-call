import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { selectedCity } = this.props
    this.setState({selectedCity: event.target.value});
    console.log(selectedCity)
  }

  render() {
    const { selectedState } = this.props;
    return(
      <select value={this.state.selectedCity} onChange={this.handleChange}>
        { selectedState ? selectedState.map((cityName, index) => {
          return (
          <option
            value={cityName.name}
            key={ index }
          >
            { cityName.name }
          </option>);
        })
        : <option>Loading</option> }
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedState: state.selectedState.selectedState,
});

export default connect(mapStateToProps)(SelectCity);
