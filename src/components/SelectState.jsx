import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestStateAPI } from '../redux/actions';

class SelectState extends Component {
  constructor(props) {
    super(props);
    this.createOptions = this.createOptions.bind(this);
  }

  async createOptions() {
    const { country, getStates, states } = this.props
    await getStates(country.iso2)
    console.log(states)
  }

  render() {
    return(
      <div>
        <button
        type="button"
        onClick={ this.createOptions }
        >
          teste
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  country: state.country.country,
  states: state.states.states,
});

const mapDispatchToProps = (dispatch) => ({
  getStates: (input) => dispatch(requestStateAPI(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectState);
