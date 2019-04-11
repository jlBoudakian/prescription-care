import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';
import HomePage from './home/HomePage';
import Medicines from './medicines/Medicines';
import Schedule from './schedule/Schedule';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/medicines" component={Medicines} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
