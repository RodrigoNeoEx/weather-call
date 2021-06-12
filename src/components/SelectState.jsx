import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedState } from '../redux/actions';

class SelectState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    const { selectedState } = this.state;
    const { getSelectedState } = this.props
    getSelectedState(selectedState);

  }

  async handleChange(event) {
    this.setState({selectedState: event.target.value});
  }

  render() {
    const { states } = this.props;
    const { selectedState } = this.state;
    return(
      <select value={ selectedState } onChange={this.handleChange}>
        { states && states.map((stateName) => (
          <option
            value={stateName.iso2}
            key={ stateName.name }
          >
            { `${stateName.name} - ${stateName.iso2}` }
          </option>
          ))
        }
      </select>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSelectedState: (input) => dispatch(setSelectedState(input)),
});

const mapStateToProps = (state) => ({
  states: state.states.states,
  selectedState: state.selectedState.selectedState,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectState);
