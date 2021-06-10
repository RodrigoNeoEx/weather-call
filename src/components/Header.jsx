import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountryAPI, requestStateAPI } from '../redux/actions';
import SelectState from './SelectState';
// import SelectCity from './SelectCity';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleCountry = this.handleCountry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createStatesOptions = this.createStatesOptions.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleCountry() {
    const { getCountry } = this.props;
    const { name } = this.state;
    await getCountry(name)
    this.createStatesOptions()
  }

  async createStatesOptions() {
    const { country, getStates } = this.props
      await getStates(country.iso2)
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
            maxLength="3"
            value={ name }
            onChange={ this.handleChange }
            className="inputCountry"
          />
          <button
           type="button"
           className="submitCountry"
           onClick={ this.handleCountry }
           >
            Set you country acronym
          </button>
          <SelectState />
          {/* <SelectCity /> */}
        </form>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  country: state.country.country,
  states: state.states.states,
  city: state.city.city,
});

const mapDispatchToProps = (dispatch) => ({
  getCountry: (input) => dispatch(requestCountryAPI(input)),
  getStates: (input) => dispatch(requestStateAPI(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
