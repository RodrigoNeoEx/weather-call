import React, { Component } from 'react';
import { requestCountryAPI } from '../services/requestAPI';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleCountry = this.handleCountry.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleCountry() {
    const { name } = this.state;
    requestCountryAPI(name)
  }

  render() {
    const { name } = this.state;
    return(
      <header>
        <h1>Set your Country, state and city to show your weather in real time!</h1>
        <form>
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
          <button
           type="button"
           className="submitWeather"
           onClick={ this.handleCountry }
           >
            Show me Weather
          </button>
          { this.handleCountry }
        </form>
      </header>
    )
  }
}

export default Header;
