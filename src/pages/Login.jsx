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
      <main className="content">
        <header className="headerContainer">
          <h1 className="title">Welcome to your global weather finder</h1>
          <p className="title">Set the country, state and city where you want to see the weather in the desired location</p>
          <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#8e54f194" fillOpacity="1" d="M0,128L21.8,122.7C43.6,117,87,107,131,138.7C174.5,171,218,245,262,250.7C305.5,256,349,192,393,149.3C436.4,107,480,85,524,112C567.3,139,611,213,655,240C698.2,267,742,245,785,213.3C829.1,181,873,139,916,106.7C960,75,1004,53,1047,53.3C1090.9,53,1135,75,1178,106.7C1221.8,139,1265,181,1309,176C1352.7,171,1396,117,1418,90.7L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
          </path>
          </svg>
        </header>
        <section className="loginSection">
          <form className="searchContainer">
            <span>Type your country acronym</span>
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
              Send
            </button>
            { states && <SelectState /> }
            { selectedState.length > 0 && country !== undefined
              ? <SelectCity />
              : <span className="advisor"> Select the State </span>
            }
          </form>
        </section>
          { country && <ShowSearch /> }
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
