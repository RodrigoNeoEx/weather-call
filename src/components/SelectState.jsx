import React, { Component } from 'react';
import { requestStateByCountry } from '../services/requestAPI';

class SelectState extends Component {
  constructor(props) {
    super(props);
    this.createOptions = this.createOptions.bind(this);
  }

  createOptions(country) {
    requestStateByCountry(country)

  }

  render() {
    return(
      <select>

      </select>
    )
  }
}

export default SelectState;
