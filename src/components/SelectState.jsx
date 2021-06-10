import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectState extends Component {
  render() {
    const { states } = this.props;
    return(
      <select>
        { states ? states.map((stateName) => {
          return <option key={ stateName.name }>{stateName.iso2}</option>
        })
        : <option>Loading</option> }
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  states: state.states.states,
});

export default connect(mapStateToProps)(SelectState);
