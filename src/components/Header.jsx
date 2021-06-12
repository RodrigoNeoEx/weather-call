import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountryAPI, requestStateAPI } from '../redux/actions';
import SelectState from './SelectState';
// import SelectCity from './SelectCity';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'BR',
      states: [],
    };
    this.handleCountry = this.handleCountry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.requestStates = this.requestStates.bind(this);
  }

  componentDidMount() {
    this.handleCountry()
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleCountry() {
    const { getCountry } = this.props;
    const { name } = this.state;
    await getCountry(name);
    await this.requestStates();
  }

  async requestStates() {
    const { country, getStates, states } = this.props;
    await getStates(country.iso2);
    this.setState({states: states});
  }

    render() {
    const { name, states } = this.state;
    const { selectedState, country } = this.props
    console.log(selectedState, country)
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
            Set your country acronym
          </button>
          { states && <SelectState /> }
          {/* { city.length === 0 ? '' : <SelectCity /> } */}
        </form>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  country: state.country.country,
  states: state.states.states,
  city: state.city.city,
  selectedState: state.selectedState.stateSelected,
});

const mapDispatchToProps = (dispatch) => ({
  getCountry: (input) => dispatch(requestCountryAPI(input)),
  getStates: (input) => dispatch(requestStateAPI(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
