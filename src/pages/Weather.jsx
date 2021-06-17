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
      <section>
        <p>{this.teste()}</p>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather.weather,
});

export default connect(mapStateToProps)(Weather);