import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import IndexTimeLine from './pages/time-line/IndexTimeLine';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/login" />}
              />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/time-line" component={IndexTimeLine}/>
            </Switch>
          </Router>
      </div>
    )
  }
}

export default Root