import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCountryAPI, requestStateAPI } from '../redux/actions';
import SelectState from '../components/SelectState';
import SelectCity from '../components/SelectCity';
import ShowSearch from '../components/ShowSearch';
import '../style/pages/Login/Login.css'

class Login extends Component {
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
    return(
      <main className="loginPage">

        <header className="headerContainer">
          <h1 className="titleLogin">Welcome to your global weather finder</h1>
          <p className="titleLogin">Set the country, state and city where you want to see the weather in the desired location</p>
          <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#8e54f194" fill-opacity="1" d="M0,32L26.7,58.7C53.3,85,107,139,160,170.7C213.3,203,267,213,320,186.7C373.3,160,427,96,480,112C533.3,128,587,224,640,240C693.3,256,747,192,800,138.7C853.3,85,907,43,960,21.3C1013.3,0,1067,0,1120,26.7C1173.3,53,1227,107,1280,133.3C1333.3,160,1387,160,1413,160L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z">
          </path>
          </svg>
        </header>

        <section className="loginSection">
          <form className="searchContainer">
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
              Type your country acronym
            </button>
            { states && <SelectState /> }
            { selectedState.length > 0 && country !== undefined
              ? <SelectCity />
              : console.log("não foi")
            }
          </form>
        </section>
        <ShowSearch />
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
