import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from'./containers/Home/home';
import Dashboard from './containers/Dashboard/dashboard';
import Profile from './containers/Profile/profile';
import About from './containers/AboutUs/about';
import Contact from './containers/ContactUs/contact';
import SignIn from './containers/SignIn/signIn';

class App extends Component {
  render(){
    return (
    <div>
      <div className="container">
          <Router>
            <Switch>
            <Route path="/" component={Home} exact>
                <Home/>
            </Route>
            <Route path="/dashboard" component={Dashboard}>
                <Dashboard/>
            </Route>
            <Route path="/profile" component={Profile}>
                <Profile/>
              </Route>
              <Route path="/about"component={About}>
                <About/>
              </Route>
              <Route path="/contact"component={Contact}>
                <Contact/>
              </Route>
              <Route path="/signin"component={SignIn}>
                <SignIn/>
              </Route>
            </Switch>
          </Router> 
      </div>
    </div>
  );
  }
}
  

export default App;
