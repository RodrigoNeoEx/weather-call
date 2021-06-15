import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import Weather from './pages/Weather';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/weather" component={ Weather } /> */}
      </Switch>
    </div>
  );
}

export default App;
