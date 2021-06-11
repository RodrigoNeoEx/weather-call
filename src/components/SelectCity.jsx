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
    const { city } = this.props;
    const { selectedCity } = this.state;
    return(
      <select value={ selectedCity } onChange={this.handleChange}>
        { city ? city.map((cityName, index) => {
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
  city: state.city.city,
});

export default connect(mapStateToProps)(SelectCity);
