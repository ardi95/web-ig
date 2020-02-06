import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import IndexTimeLine from './pages/time-line/IndexTimeLine';
import IndexProfile from './pages/profile/IndexProfile'
import Footer from './components/Footer';

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
              <Route exact path="/profile" component={IndexProfile}/>
            </Switch>
          </Router>
          <Router>
            <Switch>
              <Route exact path="/time-line" component={Footer}/>
              <Route exact path="/profile" component={Footer}/>
            </Switch>
          </Router>
      </div>
    )
  }
}

export default Root