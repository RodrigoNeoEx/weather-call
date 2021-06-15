import React, { Component } from 'react';

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

export default Weather;
