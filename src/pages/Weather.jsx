import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.teste = this.teste.bind(this);
  }

  teste() {
    return <div>Hello</div>
  }
  render() {
    return (
      <div>
        <p>{this.teste()}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather.weather,
});

export default connect(mapStateToProps)(Weather);
