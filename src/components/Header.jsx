import React, { Component } from 'react';
import SelectState from './SelectState';
import { connect } from 'react-redux';
import { requestCountryAPI } from '../redux/actions';


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
    const { getCountry } = this.props;
    const { name } = this.state;
    getCountry(name)
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
        </form>
        <SelectState />
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  country: state.country.country,
});

const mapDispatchToProps = (dispatch) => ({
  getCountry: (input) => dispatch(requestCountryAPI(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
